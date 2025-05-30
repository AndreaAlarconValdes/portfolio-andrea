import React, { useRef, useState, useEffect, ReactNode, CSSProperties } from "react";

interface Position {
  x: number;
  y: number;
}

interface DraggableProps {
  children: ReactNode;
  initialPosition?: Position;
  style?: CSSProperties;
  className?: string;
  onDragStart?: () => void;
  onDragEnd?: (position: Position) => void;
  onDrag?: (position: Position) => void;
}

const Draggable: React.FC<DraggableProps> = ({
  children,
  initialPosition = { x: 0, y: 0 },
  style,
  className,
  onDragStart,
  onDragEnd,
  onDrag,
}) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const dragging = useRef(false);
  const offset = useRef<Position>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onDragStart && onDragStart();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    const newPosition = {
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    };
    setPosition(newPosition);
    onDrag && onDrag(newPosition);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    onDragEnd && onDragEnd(position);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      // Clean up event listeners on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: dragging.current ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        handleMouseDown(e);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default Draggable;
