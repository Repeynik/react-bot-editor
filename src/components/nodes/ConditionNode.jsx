import { Handle, Position } from "reactflow";
import { renderTextWithVariables } from "../../utils/scenarioUtils";

export default function ConditionNode({ data }) {
  return (
    <div className="node condition">
      <strong>{data.label}</strong>
      <div className="condition-expression">
        {renderTextWithVariables(data.expression)}
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        className="left-30"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        className="left-70"
      />
    </div>
  );
}
