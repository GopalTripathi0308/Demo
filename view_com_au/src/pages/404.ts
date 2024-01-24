import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    router.push("/conveyancing");
  }, [router]);

  return null;
};

export default NotFoundPage;
