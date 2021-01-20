import styled from 'styled-components';
import { Link } from 'gatsby';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(358px, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  } ;
`;
export const Card = styled.section`
  background: #ffffff;

  border-radius: 0 0 5px 5px;
  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  line-height: 2rem;

  overflow: hidden;

  font-weight: bold;
`;

export const CardSubTitle = styled.p`
  line-height: 2rem;

  overflow: hidden;

  font-weight: bold;
`;

export const CardDate = styled.p``;

/* Tag */

export const Tag = styled(Link)`
  background-color: #ffd42a;

  color: black;
  font-size: 10px;

  border: none;
  border-radius: 2rem;

  &:hover {
    background: #fff5cc;
  }
`;

export const TagWrap = styled.div``;
