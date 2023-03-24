import Hello from "./Hello";

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
const Main = () => {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Satria" />
      <Hello name="Wahyu" />
      <Hello name="Ismail" />
      <Hello name="Febi" />
      <Hello name="Febiyanti" />
    </main>
  );
}

export default Main;