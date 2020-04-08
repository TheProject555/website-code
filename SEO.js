import wixSeo from 'wix-seo';

// Lines 5 - 18 written by Daniel Long

$w.onReady( () => {
  wixSeo.setLinks("English for Life Academy")
    [
      { 
        href: "https://lynchburgenglishcl.wixsite.com/website"
      }
    ]
  .then( () => {
    console.log("links set");
  } )
  .catch( () => {
    console.log("failed setting links");
  } );
} );


