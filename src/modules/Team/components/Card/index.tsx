import React, { useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import { useSpring, animated } from 'react-spring';
import { Container } from './styles';

interface CardProps {
  title: string;
  value: number;
  icon: React.ComponentType<IconBaseProps>;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, value, color }) => {
  const { number } = useSpring({
    config: { duration: 2000 },
    number: value,
    from: { number: 0 },
  });

  const numberPeople = useMemo(() => {
    return number.interpolate((n: any) => Math.floor(n));
  }, [number]);

  return (
    <Container>
      <div>
        <p>{title}</p>
        <div className="iconBall" style={{ backgroundColor: color }}>
          <Icon color="#fff" size={16} />
        </div>
      </div>
      <p className="number">
        <animated.span>{numberPeople}</animated.span>
        <span className="people">people</span>
      </p>
    </Container>
  );
};

export default Card;
