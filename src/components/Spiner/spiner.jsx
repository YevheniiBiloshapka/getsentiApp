import { Ellipsis } from './spiner.styled';

export const Spiner = ({ styled }) => {
  return (
    <Ellipsis style={styled}>
      <div></div>
      <div></div>
    </Ellipsis>
  );
};
