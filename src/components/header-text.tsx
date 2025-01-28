interface HeaderTextProps {
  name: string;
  money: number;
}

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR"
});

export default function HeaderText({ name, money }: HeaderTextProps) {
  return (
    <header className="header-text">
      {name.length > 0 ? (
        <>
          <h1>Angpau for {name}</h1>
          <h1>{formatter.format(money * 1000)}</h1>
        </>
      ) : (
        <>
          <h1>Angpau Online</h1>
          <h2>by GPR</h2>
        </>
      )}
    </header>
  );
}
