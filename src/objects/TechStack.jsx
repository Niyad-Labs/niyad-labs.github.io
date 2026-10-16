import { Text, Line, Edges } from "@react-three/drei";
import { useState, useMemo } from "react";
import * as THREE from "three";

// All technical skills from your resume
const categories = {
  Programming: [
    "JavaScript",
    "Python",
    "Dart",
    "Java",
    "C",
    "C++",
    "PHP",
    "Bash",
  ],

  Frontend: [
    "React.js",
    "Redux",
    "React Hooks",
    "HTML5",
    "CSS3",
    "Sass",
    "Bootstrap",
    "EJS",
    "Material UI",
    "Three.js",
    "Responsive Design",
    "Axios",
    "Fetch API",
    "Tailwind CSS",
    "Vite",
    "SVG",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MVC",
    "JWT",
    "Middleware",
    "API Integration",
    "FastAPI",
    "WebSockets",
  ],

  Databases: [
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Relational Design",
  ],

  "Mobile / Desktop": ["Flutter", "Electron.js", "Android Java"],

  "Tools & DevOps": [
    "Docker",
    "Docker Compose",
    "Git",
    "GitHub",
    "GitHub Actions",
    "YAML",
    "VS Code",
    "Postman",
    "Figma",
    "Nodemon",
    "dotenv",
    "Linux",
    "Inkscape",
  ],

  "Deployment & Cloud": [
    "Render",
    "Vercel",
    "Environment Config",
    "Production Builds",
    "CI/CD Automation",
  ],
};

const colors = [
  "#70D6FF",
  "#FF70A6",
  "#FF9770",
  "#FFD670",
  "#E9FF70",
  "#B8A1FF",
  "#80ED99",
  "#F28482",
  "#84A59D",
  "#F6BD60",
  "#A0C4FF",
  "#FFC6FF",
  "#9BF6FF",
  "#CAFFBF",
  "#FDFFB6",
  "#D0BFFF",
];

const OUTER_RADIUS = 2;
const INNER_RADIUS = 1;
const EXTRUDE_DEPTH = 0.4;
const LABEL_RADIUS = 2.5;

// Create one slice of the donut
function createDonutSlice(startAngle, endAngle) {
  const shape = new THREE.Shape();

  // Outer arc
  shape.moveTo(
    OUTER_RADIUS * Math.cos(startAngle),
    OUTER_RADIUS * Math.sin(startAngle),
  );

  shape.absarc(0, 0, OUTER_RADIUS, startAngle, endAngle, false);

  // Inner arc, in reverse direction
  shape.lineTo(
    INNER_RADIUS * Math.cos(endAngle),
    INNER_RADIUS * Math.sin(endAngle),
  );

  shape.absarc(0, 0, INNER_RADIUS, endAngle, startAngle, true);

  shape.closePath();

  return new THREE.ExtrudeGeometry(shape, {
    depth: EXTRUDE_DEPTH,
    bevelEnabled: false,
    curveSegments: 12,
  });
}

// One donut slice, its external label, and its leader line
function DonutSlice({ name, color, startAngle, endAngle }) {
  const geometry = useMemo(
    () => createDonutSlice(startAngle, endAngle),
    [startAngle, endAngle],
  );

  const middleAngle = (startAngle + endAngle) / 2;

  // Point on the outer edge
  const startX = Math.cos(middleAngle) * OUTER_RADIUS;
  const startY = Math.sin(middleAngle) * OUTER_RADIUS;

  // Elbow point for the leader line
  const elbowRadius = 2.5;

  const elbowX = Math.cos(middleAngle) * elbowRadius;
  // const elbowY = Math.sin(middleAngle) * elbowRadius;

  // External label position
  const labelX = Math.cos(middleAngle) * LABEL_RADIUS;
  const labelY = Math.sin(middleAngle) * LABEL_RADIUS;

  // Keep labels outside the donut on their respective sides
  const rightSide = Math.cos(middleAngle) >= 0;

  const labelPosition = [
    rightSide
      ? Math.max(labelX, elbowX + 0.12)
      : Math.min(labelX, elbowX - 0.12),
    labelY,
    0.28,
  ];

  return (
    <group>
      {/* Donut slice */}
      <mesh geometry={geometry} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.38} metalness={0.12} />
      </mesh>

      {/* Leader line */}
      <Line
        points={[
          [startX, startY, 0],
          // [elbowX, elbowY, 0],
          [labelPosition[0], labelPosition[1], 0],
        ]}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.5}
      />

      {/* Technology name */}
      <Text
        position={labelPosition}
        fontSize={0.2}
        color="#FFF"
        anchorX={rightSide ? "left" : "right"}
        anchorY="middle"
        maxWidth={1.8}
        textAlign={rightSide ? "left" : "right"}
        outlineWidth={0.003}
        outlineColor="#111111"
        toneMapped={false}
      >
        {name}
      </Text>
    </group>
  );
}

function DonutChart({ skills }) {
  const total = skills.length;

  return (
    <group>
      {skills.map((skill, index) => {
        const startAngle = (index / total) * Math.PI * 2 - Math.PI / 2;

        const endAngle = ((index + 1) / total) * Math.PI * 2 - Math.PI / 2;

        return (
          <DonutSlice
            key={skill}
            name={skill}
            index={index}
            total={total}
            color={colors[index % colors.length]}
            startAngle={startAngle}
            endAngle={endAngle}
          />
        );
      })}

      {/* Donut center */}
      <mesh position={[0, 0, 0.16]}>
        <circleGeometry args={[INNER_RADIUS - 0.03, 64]} />
        <meshBasicMaterial color="#151515" />
      </mesh>

      <Text
        position={[0, 0, 0.3]}
        fontSize={0.32}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        textAlign="center"
        toneMapped={false}
      >
        {total}
      </Text>
    </group>
  );
}

export default function TechStack() {
  const categoryNames = Object.keys(categories);

  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const skills = categories[selectedCategory];

  return (
    <group position={[0, 1.2, -56]}>
      {/* Main heading */}
      <Text
        position={[-3.5, 3, 0]}
        fontSize={0.55}
        color="#C5C5C5"
        anchorX="center"
        anchorY="middle"
        toneMapped={false}
      >
        Technical Skills
      </Text>
      {/* background */}
      <mesh position={[0, 0, -0.03]}>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="#141414" transparent opacity={0.5} />
        <Edges color="#000" />
      </mesh>
      {/* LEFT SIDE: Category selector */}
      <group position={[-5.5, -0.5, 0]}>
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.25}
          color="#888888"
          anchorX="left"
          anchorY="middle"
        >
          CATEGORIES
        </Text>

        {categoryNames.map((category, index) => {
          const active = selectedCategory === category;
          const y = 1.8 - index * 0.62;

          return (
            <group
              key={category}
              position={[0, y, 0]}
              onClick={(event) => {
                event.stopPropagation();
                setSelectedCategory(category);
              }}
              onPointerOver={() => {
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "auto";
              }}
            >
              {/* Active indicator */}
              {active && (
                <mesh position={[-0.12, 0, 0]}>
                  <planeGeometry args={[0.045, 0.34]} />
                  <meshBasicMaterial color="#70D6FF" toneMapped={false} />
                </mesh>
              )}

              <Text
                position={[0, 0, 0.05]}
                fontSize={0.23}
                color={active ? "#70D6FF" : "#BBBBBB"}
                anchorX="left"
                anchorY="middle"
                maxWidth={3.8}
                toneMapped={false}
              >
                {category}
              </Text>

              {/* Number of skills */}
              <Text
                position={[3, 0, 0.05]}
                fontSize={0.16}
                color={active ? "#70D6FF" : "#BBBBBB"}
                anchorX="right"
                anchorY="middle"
                toneMapped={false}
              >
                {String(categories[category].length).padStart(2, "0")}
              </Text>
            </group>
          );
        })}
      </group>

      {/* RIGHT SIDE: Donut chart */}
      <group position={[2.3, -1, 0]}>
        <Text
          position={[0, 3.5, 0]}
          fontSize={0.3}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          toneMapped={false}
        >
          {selectedCategory}
        </Text>

        <DonutChart skills={skills} />
      </group>
    </group>
  );
}
