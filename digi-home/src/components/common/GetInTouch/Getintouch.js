import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button type1">
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    height: 50px;
    width: 150px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .button:hover {
    box-shadow: .5px .5px 150px #252525;
  }

  .type1::after {
    content: "Thanks";
    height: 50px;
    width: 150px;
    background-color: rgb(6, 0, 186);
    color: #fff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(50px);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1::before {
    content: "Get in Touch";
    height: 50px;
    width: 150px;
    background-color: #fff;
    color:rgb(6, 0, 186);
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0px) scale(1.2);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1:hover::after {
    transform: translateY(0) scale(1.2);
  }

  .type1:hover::before {
    transform: translateY(-50px) scale(0) rotate(120deg);
  }`;

export default Button;
