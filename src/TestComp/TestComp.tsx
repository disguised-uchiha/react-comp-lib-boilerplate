import React from "react";

import { TestCompProps } from "./TestComp.types";

import styles from "./TestComp.module.scss";

export const TestComp: React.FC<TestCompProps> = ({ children }) => <div className={styles.test}>{children}</div>;
