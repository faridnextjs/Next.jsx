import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
