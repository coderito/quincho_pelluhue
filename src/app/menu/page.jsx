import { Alfa_Slab_One } from "next/font/google";

const alfa_slab_one = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Menu() {
  return (
    <div className="pt-28  lg:pt-32  h-full  bg-[url('/img/inicio/bg.jpg')]">
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
        <h2
          className={`${alfa_slab_one.className} text-6xl tracking-wider mb-12 text-orange-600`}
        >
          Menu
        </h2>
        <div className="flex flex-col gap-12">
          <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
              <thead class="text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-lg font-bold bg-gray-900 text-white"
                  >
                    BEBESTIBLES
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-lg font-bold bg-orange-400 text-white "
                  >
                    PRECIO
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    JUGO NATURAL
                  </th>

                  <td class="px-6 py-4 bg-orange-400 text-white">$3,000</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    BEBIDAS (350 CC)
                  </th>

                  <td class="px-6 py-4px-6 py-4 bg-orange-400 text-white">
                    $2,500
                  </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    AGUA CON/SIN GAS
                  </th>

                  <td class="px-6 py-4  bg-orange-400 text-white">$2,000</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    NECTAR (350 CC)
                  </th>

                  <td class="px-6 py-4 bg-orange-400 text-white">$2,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
              <thead class="text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="pl-6 py-3 text-lg font-bold bg-gray-900 text-white"
                  >
                    PASTEL DE CAMARON
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-lg font-bold bg-orange-400 text-white "
                  >
                    PRECIO
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    JUGO NATURAL
                  </th>

                  <td class="px-6 py-4 bg-orange-400 text-white">$3,000</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    BEBIDAS (350 CC)
                  </th>

                  <td class="px-6 py-4px-6 py-4 bg-orange-400 text-white">
                    $2,500
                  </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    AGUA CON/SIN GAS
                  </th>

                  <td class="px-6 py-4  bg-orange-400 text-white">$2,000</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    NECTAR (350 CC)
                  </th>

                  <td class="px-6 py-4 bg-orange-400 text-white">$2,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
              <thead class="text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="pl-6 py-3 text-lg font-bold bg-gray-900 text-white"
                  >
                    CHUPE DE MARISCOS SURTIDOS
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-lg font-bold bg-orange-400 text-white "
                  >
                    PRECIO
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6  py-4 font-medium text-gray-900 whitespace-normal	 bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    CHUPE DE MARISCOS SURTIDOS CON CAMARÓN Y MACHAS BLANCAS
                  </th>

                  <td class="px-6 py-4 bg-orange-400 text-white">$11,500</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-normal	 bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    CHUPE DE MARISCOS SURTIDOS CON CAMARÓN, MACHAS BLANCAS Y LOCOS
                  </th>

                  <td class="px-6 py-4px-6 py-4 bg-orange-400 text-white">
                  $13,900




                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
