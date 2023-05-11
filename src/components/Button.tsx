import styled from "styled-components";

const ButtonEl = styled.button`
  margin-left: auto;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 3px;
  background-color: #0765f1;
  color: #f1f3f5;
  font-family: inherit;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s;
`;

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
};

const Button = ({ children, type, className }: ButtonProps) => {
  return (
    <ButtonEl type={type} className={className}>
      {children}
    </ButtonEl>
  );
};

export default Button;
