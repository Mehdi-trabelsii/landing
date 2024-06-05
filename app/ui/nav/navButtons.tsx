import Button from "../button";

export default function NavButtons() {
  return (
    <div className="flex gap-[20px]">
      <Button text="Register" color="white"></Button>
      <Button text="Login" color="white"></Button>
    </div>
  );
}
