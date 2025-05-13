import "./App.css";

function App() {
  return (
    <main className="bg-gray-50 p-8 min-h-screen flex justify-center items-center ">
      <article className="bg-white max-w-4xl p-8 rounded-lg shadow-xl">
        <header className="mb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Ndriana Ranto</h1>
          <p className="text-sm text-gray-500 italic">A personal reflection</p>
        </header>

        <section className="text-md text-left text-gray-700 leading-relaxed space-y-6">
          <p className="">
            Tsy mipetraka any Madagasikara aho ary tsy hiverina intsony. Manaraka ny zava-misy any aho, izay tsy
            mankarary fo.
          </p>
          <p className="">
            Ny mahagaga ahy dia toy ny nahagaga an’i Ian Flemming izay nahatsikaritra ny fiantraikan’ny olatra tamin’ny
            bacterie; dia ny fisian’ilay zazalahy hoe Ndriana Ranto.
          </p>
          <p className="">Tsy fantatro izy, tsy mampaninona; fa ny zava-bitany no mahalasa saina.</p>
          <img src="page.png" width={400} className="text-center justify-center" />
        </section>

        <section className="text-left space-y-6">
          <p className="">
            Nanokatra sekoly izy tamin’ny faha-24 taonany. Zazalahy manam-pahaizana ary manam-pahaizana toy izany koa ny
            mpianatra avoakany.<span className="italic">« Mahaleova mahalasana letsy a ! ».</span>
          </p>
          <p className="">
            Mamoaka mention isan-taona ny sekoly izay hiandraiketany, serie C. Ny nahatalanjona ahy dia valin’ny BACC
            2023-24. Izao no valin’ny Bacc tamin’izany :
          </p>
          <img src="resultatBacc.png" width={400} className="text-center justify-center " />
          <table className=" border ">
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">Mention Bien</td>
                <td className="px-4 py-2 text-sm text-gray-700">10</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">Mention Assez Bien</td>
                <td className="px-4 py-2 text-sm text-gray-700">13</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">Mention Passable</td>
                <td className="px-4 py-2 text-sm text-gray-700">10</td>
              </tr>
            </tbody>
          </table>
          <p>Mbola tsy nisy toy izany tany Madagasikara.</p>
        </section>
        <section className="space-y-6 text-left">
          <p>
            Mampianatra mathématiques maimaim-poana izy ho an’ny ankizy te hivoatra. Mampianatra allemand maimaim-poana
            izy sy tenim-pirenena hafa koa.
          </p>
          <img src="teaching.png" width={400} className="text-center justify-center mb-6" />
          <p>
            Miarahaba anao aho Ndriana Ranto. Izao mihitsy ny Malagasy notadiaviko, tanora mahay, hendry sady tia
            tanindrazana. Amiko dia tigre kelin’i Madagasikara ianao, the little tiger of Madagascar.
          </p>
          <p>Manantena hifankahita aminao aho Ndriana Ranto fa tsy any Madagasikara. </p>
          <p>Professeur Malagasy aty am-pita aho, tsy any Frantsa.</p>
        </section>

        <footer className="mt-6 border-t pt-4 text-sm text-gray-600">
          <p>&copy; 2025 - All rights reserved</p>
        </footer>
      </article>
    </main>
  );
}

export default App;
