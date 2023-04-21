import React, { useState, useEffect, useRef } from "react";

function StreamPlayer() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:1234/screen");
    ws.binaryType = "arraybuffer";
    ws.onopen = () => {
      setSocket(() => ws);
    };
    ws.onmessage = (event) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          };
          const data = new Uint8Array(event.data);
          img.src =
            "data:image/jpeg;base64," + btoa(String.fromCharCode(...data));
        }
      }
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ cursor: "none" }}
      width={window.innerWidth} 
      height={window.innerHeight} 
    />
  );
}

export default StreamPlayer;
