import styled from 'styled-components';
import { Link } from 'gatsby';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  } ;
`;
export const Card = styled.section`
  background: #ffffff;

  /* border: 1px solid black; */
  border-radius: 0 0 5px 5px;
  text-decoration: none;
  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);
  height: 250px;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  margin-top: 1.4rem;
  color: black;
  font-size: 23px;
  margin-bottom: 1rem;
  text-align: left;
  line-height: 2rem;
  margin-left: 10px;
  height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  cursor: pointer;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: bold;
`;

export const CardSubTitle = styled.p`
  margin-top: 40px;
  text-align: left;
  color: black;
  font-size: 15px;
  height: 20px;

  cursor: pointer;
  margin-left: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 10px;
`;

export const CardDate = styled.p`
  font-size: 8px;
  text-align: right;
  margin-right: 10px;
  margin-top: 40px;
`;

/* Tag */

export const Tag = styled(Link)`
  color: black;
  font-size: 13px;
  margin-left: 20px;
  text-decoration: none;
  border: none;
  border-radius: 2rem;

  &:hover {
    background: #fff5cc;
  }
`;

export const TagWrap = styled.div`
  margin-top: 40px;
`;
