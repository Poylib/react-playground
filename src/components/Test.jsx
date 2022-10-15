import styled from "styled-components";

const TestBlock = styled.div``;

const Test = () => {
  return (
    <TestBlock>
      <span>add after staging</span>
      <span>git commit -v</span>
      <span>git log -p -2</span>
    </TestBlock>
  );
};

export default Test;
