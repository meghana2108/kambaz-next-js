import Link from "next/link";
export default function Kambaz() {
  return (
    <div>
      <h1>Kambaz</h1>
      <h2>This assignment belongs to Meghana Raghavendra</h2>
      Click here for Github{" "}
      <a
        href="https://github.com/meghana2108"
        target="_blank"
        rel="noopener noreferrer"
      >
        meghana2108
      </a>
      <p>Welcome to Kambaz!</p>
      <Link href="/kambaz/Account/signin">Sign In to Kambaz</Link>
      <br />
      <Link href="/Labs">Click here to go to labs</Link>
    </div>
  );
}
