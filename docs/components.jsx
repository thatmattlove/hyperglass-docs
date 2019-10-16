import React from "react";
import CodeBlock from "@theme/CodeBlock";

export const FieldName = props => {
  const nameStyle = {
    fontWeight: "var(--ifm-font-weight-bold)",
    whiteSpace: "nowrap",
    color: "var(--ifm-table-cell-color)"
  };
  const typeStyle = {
    fontSize: "smaller",
    color: "var(--ifm-color-content)",
    fontStyle: "italic",
    fontWeight: "normal"
  };
  return (
    <>
      <span style={nameStyle}>{props.name}</span>
      <br />
      <span style={typeStyle}>{props.type}</span>
    </>
  );
};

export const FieldDefault = props => {
  const setColor = fieldType => {
    switch (fieldType) {
      case "integer":
        return "var(--ifm-color-danger)";
      case "string":
        return "var(--ifm-color-primary)";
      default:
        return "var(--ifm-code-color)";
    }
  };
  const formatValue = (fieldType, fieldText) => {
    switch (fieldType) {
      case "string":
        return `'${fieldText}'`;
      default:
        return `${fieldText}`;
    }
  };
  const fieldStyle = {
    backgroundColor: "var(--ifm-code-background)",
    color: setColor(props.type),
    fontFamily: "var(--ifm-font-family-monospace)",
    fontSize: "var(--ifm-code-font-size)",
    borderRadius: "var(--ifm-code-border-radius)",
    margin: "0",
    padding:
      "var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal)"
  };
  const fieldValue = formatValue(props.type, props.value);
  return <span style={fieldStyle}>{fieldValue}</span>;
};

export const FieldDefaultBlock = props => {
  const mdxCodeBlock = {
    backgroundColor: "transparent",
    borderRadius: "var(--ifm-global-radius)",
    boxSizing: "border-box",
    fontFamily: "inherit",
    padding: "0"
  };
  const fieldValue = `'${props.value}'`;
  return (
    <>
      <pre style={mdxCodeBlock}>
        <CodeBlock className={props.language} children={fieldValue} />
      </pre>
    </>
  );
};

export const Color = props => {
  const colorCodeElement = <FieldDefault type="string" value={props.value} />;
  const colorPreviewStyle = {
    backgroundColor: props.value,
    borderRadius: "0.25rem",
    display: "inline-block",
    float: "left",
    height: "20px",
    marginRight: "2px",
    width: "20px"
  };
  return (
    <>
      <span style={colorPreviewStyle}></span>
      <br />
      {colorCodeElement}
    </>
  );
};

export const Regex = props => {
  const patterns = {
    aspath_asdot: String.raw`^(\^|^\_)((\d+\.\d+)\_|(\d+\.\d+)\$|(\d+\.\d+)\(\_\.\+\_\))+$`,
    aspath_asplain: String.raw`^(\^|^\_)(\d+\_|\d+\$|\d+\(\_\.\+\_\))+$`,
    community_decimal: String.raw`^[0-9]{1,10}$`,
    community_extended: String.raw`^([0-9]{0,5})\:([0-9]{1,5})$`,
    community_large: String.raw`^([0-9]{1,10})\:([0-9]{1,10})\:[0-9]{1,10}$`
  };
  return <FieldDefault type={props.type} value={patterns[props.value]} />;
};
