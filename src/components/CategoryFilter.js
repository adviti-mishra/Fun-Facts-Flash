import React from "react";
import { CATEGORIES } from "../constants/categories";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// export default function BasicButtonGroup() {
//   return (
//     <ButtonGroup variant="contained" aria-label="Basic button group">
//       <Button>One</Button>
//       <Button>Two</Button>
//       <Button>Three</Button>
//     </ButtonGroup>
//   );
// }

function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li className='category'>
          <button
            className='btn btn-all-categories'
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((cat) => (
          <li key={cat.name} className='category'>
            <button
              className='btn btn-category'
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}


export default CategoryFilter;
