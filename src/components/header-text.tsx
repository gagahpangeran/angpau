interface HeaderTextProps {
  name: string;
  currentMoney: number;
}

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR"
});

export default function HeaderText({ name, currentMoney }: HeaderTextProps) {
  return (
    <header className="header-text">
      {name.length > 0 ? (
        <>
          <h1>Angpau for {name}</h1>
          <h2>{formatter.format(currentMoney * 1000)}</h2>
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
