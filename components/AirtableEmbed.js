export default function AirtableEmbed({link}) {
  return (
    <iframe 
      class="airtable-embed" 
      src={`${link}`} 
      frameborder="0" 
      onmousewheel="" 
      width="100%" 
      height="533" >
    </iframe>
  );
}