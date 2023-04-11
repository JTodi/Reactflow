import React, { useCallback, useRef, useState } from "react";
import { Controls, Background } from 'reactflow';
import ReactFlow from "react-flow-renderer";
import 'reactflow/dist/style.css';
import Node from './Node.js';

const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 100, y: 0 }
  }
];

function Main(){

  const [els, setEls] = useState(initialElements);
  const yPos = useRef(0);

  const addNode = useCallback(() => {
    yPos.current += 50;
    setEls((els) => {
      console.log(els);
      return [
        ...els,
        {
          id: Math.random(),
          position: { x: 100, y: yPos.current },
          data: { label: "yo" }
        }
      ];
    });
  }, []);

  const addEdge = useCallback(({ source, target }) => {
    setEls((els) => {
      console.log(source, target);
      return [
        ...els,
        {
          id: Math.random(),
          source,
          target
        }
      ];
    });
  }, []);

    return (
        <div class="rowC">
          <div class="list" onClick={addNode}>
            <h1>Modules</h1>
            <Node/>
            <Node/>
            <Node/>
            <Node/>
            <Node/>
          </div>
          <div style={{ height: '100%' }}>
          <ReactFlow elements={els} onConnect={addEdge} />
          </div>
        </div>
      );
}

export default Main;