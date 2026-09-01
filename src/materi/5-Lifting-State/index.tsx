import { useState } from 'react';
import SearchInput from './1-SearchInput';
import SearchPreview from './2-SearchPreview';

function LiftingState() {
  const [searchText, setSearchText] = useState('');

  return (
    <section>
      <strong>LIFTING STATE DEMO</strong>

      <hr />
      <SearchInput value={searchText} onChange={setSearchText} />
      <hr />
      <SearchPreview value={searchText} />
      <hr />
    </section>
  );
}

export default LiftingState;
