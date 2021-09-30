import React from "react";

import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.styles";
import PropTypes from 'prop-types'

type Props = {
  movieTitle: string;
}

const BreadCrumb: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);



export default BreadCrumb;
