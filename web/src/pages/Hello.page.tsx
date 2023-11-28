import { Button, Text } from "@mantine/core";
import { useEffect } from "react";

import trpc from "@/core/trpc";
import { useUser } from "@/hooks/user";
import { authClient } from "@/providers/AuthProvider";

const HelloPage: React.FC = () => {
  const user = useUser();

  useEffect(() => {
    console.log(user?.email);
    console.log(user);
  }, []);
  //useQuery() => input을 서버에 넣어서 데이터를 반환
  //반환하는 형식은 {data, error, isLoading}
  // const user = useGuardedUser()
  //라우터는 하위로 내려갈 수록 .test.testRoute... 식으로 들어감
  const { data, error, isLoading } = trpc.test.testRoute.useQuery();
  // const { data, error, isLoading } = trpc.user.sampleRoute.useQuery({
  //   sample: "sub",
  // });

  return (
    <div>
      <Text color="dimmed" weight="bold">
        Hello World!
      </Text>
      <Text>{data}</Text>
      <Text>{isLoading}</Text>

      <Button
        onClick={async () => await authClient.signOut()}
        fullWidth
        mt={24}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default HelloPage;
