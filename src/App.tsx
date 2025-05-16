import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <nav className="">
        <div className="mx-auto px-2 py-2 flex justify-between items-center">
          <div className="text-lg font-bold  flex items-center space-x-1">
            <img className=" rounded-full " height={45} width={45} src="android-chrome-512x512.png" />
            <span className="text-gray-700 ">Journal Intello</span>
          </div>
        </div>
        <hr className=" border-1 border-gray-300" />
      </nav>
      <main className=" p-5 min-h-screen  text-gray-600 flex justify-center items-center">
        <article className="bg-white max-w-[52rem] p-10 rounded-lg shadow-xl">
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4"
          >
            <h1 className="text-4xl font-bold text-gray-600 mb-2">Ndriana Ranto</h1>
            <p className="text-sm text-gray-400 italic">A personal reflection</p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-md text-left  leading-relaxed space-y-6"
          >
            <p className="">
              Tsy mipetraka any Madagasikara aho ary tsy hiverina intsony. Manaraka ny zava-misy any aho, izay tsy
              mankarary fo.
            </p>
            <p className="">
              Ny mahagaga ahy dia toy ny nahagaga an’i Ian Flemming izay nahatsikaritra ny fiantraikan’ny olatra
              tamin’ny bacterie; dia ny fisian’ilay zazalahy hoe Ndriana Ranto.
            </p>
            <p className="">Tsy fantatro izy, tsy mampaninona; fa ny zava-bitany no mahalasa saina.</p>
            <img src="page.png" width={400} className="mx-auto " />
            <br />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            <p className="">
              Nanokatra sekoly izy tamin’ny faha-24 taonany. Zazalahy manam-pahaizana ary manam-pahaizana toy izany koa
              ny mpianatra avoakany.<span className="italic">« Mahaleova mahalasana letsy a ! ».</span>
            </p>
            <p className="">
              Mamoaka mention isan-taona ny sekoly izay hiandraiketany, serie C. Ny nahatalanjona ahy dia valin’ny BACC
              2023-24. Izao no valin’ny Bacc tamin’izany :
            </p>
            <img src="resultatBacc.png" width={400} className="mx-auto" />
            <table className=" border mx-auto ">
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
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 text-left"
          >
            <p>
              Mampianatra mathématiques maimaim-poana izy ho an’ny ankizy te hivoatra. Mampianatra allemand
              maimaim-poana izy sy tenim-pirenena hafa koa.
            </p>
            <img src="teaching.png" width={400} className="mx-auto" />
            <p>
              Miarahaba anao aho Ndriana Ranto. Izao mihitsy ny Malagasy notadiaviko, tanora mahay, hendry sady tia
              tanindrazana. Amiko dia tigre kelin’i Madagasikara ianao, the little tiger of Madagascar.
            </p>
            <p>Manantena hifankahita aminao aho Ndriana Ranto fa tsy any Madagasikara. </p>
            <p>Professeur Malagasy aty am-pita aho, tsy any Frantsa.</p>
          </motion.section>

          <footer className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p>&copy; 2025 - All rights reserved</p>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default App;
