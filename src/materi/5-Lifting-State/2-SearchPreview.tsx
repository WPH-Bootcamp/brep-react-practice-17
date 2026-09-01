type SearchPreviewProps = {
  value: string;
};

function SearchPreview({ value }: SearchPreviewProps) {
  return (
    <section>
      <strong>PREVIEW</strong>

      <p>{value || 'Belum ada pencarian'}</p>
    </section>
  );
}

export default SearchPreview;
