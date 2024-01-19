export default function Home() {
  return <h1>Welcome to the home page!</h1>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/conveyancing",
      permanent: true,
    },
  };
};
