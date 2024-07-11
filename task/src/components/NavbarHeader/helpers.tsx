export function getTextWithHighlight(text: string, highlight?: string) {
   if (highlight === undefined || text.indexOf(highlight) === -1) {
      return text;
   }

   const index = text.indexOf(highlight);

   const beforeHighlight = text.slice(0, index);
   const afterHighlight = text.slice(index + highlight.length);

   return (
      <>
         {beforeHighlight}
         <span>{highlight}</span>
         {afterHighlight}
      </>
   );
}
