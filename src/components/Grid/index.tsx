import React, { Children } from "react";

import { Wrapper, Content } from "../Grid/Grid.styles";

import PropTypes from 'prop-types';

type Props = {
    header: string;
}


const Grid: React.FC<Props> = ({ header, children}) => (
<Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
</Wrapper>
)


export default Grid;