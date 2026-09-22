import { use, useState } from "react";
import { useImmer } from "use-immer";
import ExpandableText from "./Components/ExpandableText";
function App() {
/*Expandable Text Component:*/
  let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequatur repudiandae ad corrupti vel, ut nemo minima modi natus aut. Voluptatibus et quis eaque possimus ipsum. Nobis, commodi. Dolorum animi repellat assumenda optio earum, consequatur quia quis quae deserunt dolores sint saepe asperiores hic, veritatis eveniet reprehenderit, quas inventore non ratione vel explicabo accusamus provident. Obcaecati ipsa sed et quos veritatis itaque delectus aliquam, non hic necessitatibus odit alias perspiciatis vitae ea at dolorem qui blanditiis mollitia aliquid iste sapiente commodi unde? Veniam at nesciunt aliquid est. Omnis vero ducimus facere voluptatem nobis est hic esse, voluptas laboriosam ipsum repellendus! Earum quae cupiditate labore deleniti suscipit ut quidem illum! Expedita veniam veritatis ad distinctio assumenda quisquam, necessitatibus facere excepturi, voluptatibus ea voluptate nostrum earum debitis, optio ratione eius adipisci saepe provident quos consequatur beatae vitae! Nulla quaerat fuga quibusdam beatae maiores officia mollitia! Ducimus adipisci cumque voluptate, sit officia eius ipsum quibusdam cum quasi ab perferendis qui optio, ut iusto quia nemo, culpa quae maxime sapiente nihil rem ipsam inventore. Eveniet, perferendis aperiam vero modi eum minima pariatur, eaque quas laborum iusto temporibus! Omnis, illo possimus accusantium eum nemo excepturi nobis explicabo cum. Libero, ratione! Odio mollitia laudantium exercitationem totam!";

return(
  <>
  <ExpandableText
  MyText={text}/>
  </>
)
}
export default App;
