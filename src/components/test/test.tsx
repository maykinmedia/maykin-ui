import React from "react";
import "./test.css";

/**
 * Test component
 * @param children Children
 * @param props
 * @constructor
 */
export const Test: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => <b {...props}>{children}</b>;