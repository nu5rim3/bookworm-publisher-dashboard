'use client';
import PublishCardItem from '@/components/publishCardItem';

const publishItem = [1, 2, 3, 4];

export default function Publisher() {
  return (
    <>
      {publishItem.map((item) => (
        <PublishCardItem key={item} />
      ))}
    </>
  );
}
