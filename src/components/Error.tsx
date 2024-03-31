import { PropsWithChildren } from "react";

function Error({ children }: PropsWithChildren) {
  return (
    <div className=" self-center text-2xl pt-5">
      <h1>Wystąpił błąd o nazwie:</h1>
      <h3 className="text-xl font-medium mt-3">{children}</h3>
    </div>
  );
}

export { Error };
