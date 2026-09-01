import { memo } from 'react';

type ActionButtonProps = {
  onSayHello: () => void;
};

const ActionButton = memo(function ActionButton({
  onSayHello,
}: ActionButtonProps) {
  console.log('ActionButton Render');
  return <button onClick={onSayHello}>Say Hello</button>;
});

export default ActionButton;
