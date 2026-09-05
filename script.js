let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
}



const products={
    1: {               
        name:"VAIRON-PARTYWEAR MINI FROCK",
        price:"Rs. 1,859/-",
        image: "images/newinfrock.jpg",
        description:"A fitted red halter dress with a flared, pleated skirt. The tie-neck design adds a flirty touch, while the fit-and-flare silhouette flatters every body type. Perfect for date nights, parties, or any occasion that calls for a bold pop of color and effortless elegance",
        category:"frock"
    },
    2:{
        name:"VAIRON- Sleveless padded tops",
        price:"Rs. 959/-",
        image: "images/ladiestop.jpg",
        description:"A Sleveless padded top, perfect for baddie look",
        category:"tops"
    },
    3:{
        name:"VAIRON-Yellow shimmy cherry handbag",
        price:"Rs. 959/-",
        image: "images/yellowbag.jpg",
        description:"Sturdy, stylish wash bag with plenty of compartments and storage options. This bag is a smart storage solution and your best friend on a trip. Multiple compartments for make-up brushes on the inside of the lid. The base is divided into several sections for a good overview of the contents and to keep them organised. Two-way zip around the front and short sides to easily open and close the bag, and a handle on one long side for hanging. Height 10 cm. Depth 16 cm. Length 25 cm.",
        category:"handbags"
    },
    4:{
        name:"VAIRON-Denim shorts (with belt buckle detail)",
        price:"Rs. 990/-",
        image: "images/ladiesshorts.jpg",
        description:"Distressed denim shorts featuring an oversized buckle belt detail with eyelet grommets — edgy and versatile for a bold streetwear look",
        category:"shorts"
    },
    5:{
        name:"VAIRON-Brown strappy heels",
        price:"Rs. 1,259/-",
        image: "images/heels.jpg",
        description:"Sleek brown strappy heels finished with sculptural gold hardware at the ankle and toe — a statement piece that elevates any outfit",
        category:"footwear"
    },

    6:{
        name:"VAIRON-Black laced flare pants",
        price:"Rs. 2,159/-",
        image: "images/ladiesjean1.jpg",
        description:"Black flared trousers with corset-style lace-up detailing down both legs, finished with tie ankles for a dramatic, edgy silhouette",
       category:"womenjeans"
    },
    7:{
        name:"VAIRON-denim ruffle mini skirt",
        price:"Rs. 1,120/-",
        image: "images/newinskirt.jpg",
        description:"A flirty denim mini skirt with a ruffled hem for extra movement — pairs perfectly with a fitted top for a playful, casual-chic look.",
       category:"shorts"
    },
    8:{
        name:"VAIRON-wild Side Leopard Off-Shoulder Top",
        price:"Rs. 1,120/-",
        image: "images/cheetadress.jpg",
        description:"An asymmetric off-shoulder top in bold leopard print, with a fitted long-sleeve silhouette that adds instant edge to any outfit.",
        category:"tops"
    },
    9:{
        name:"VAIRON-Blush Ruched Midi Dress",
        price:"Rs. 2,859/-",
        image: "images/girlsbodycone.jpg",
        description:"An asymmetric off-shoulder top in bold leopard print, with a fitted long-sleeve silhouette that adds instant edge to any outfit.",
        category:"bodycon"
    },
     
    10:{                                           
        name:"VAIRON- Red Swing Dress",
        price:"Rs. 1,120/-",
        image: "images/womenfrock2.jpg",
        description:"A fitted red halter dress with a flared, pleated skirt. The tie-neck design adds a flirty touch, while the fit-and-flare silhouette flatters every body type. Perfect for date nights, parties, or any occasion that calls for a bold pop of color and effortless elegance.",
        category:"frock"
    },

    11:{
        name:"VAIRON-Flame Print Bomber Jacket",
        price:"Rs. 2,259/-",
        image: "images/firedress.jpg",
        description:"An off-white bomber jacket featuring a striking black flame graphic across the sleeve and body. Zip-front closure and ribbed cuffs give it a sporty edge, while the oversized fit keeps it comfortable and street-style ready for everyday wear",
        category:"jacket"
    },

    12:{
        name:"VAIRON-Wide-Leg Satin Trousers",
        price:"Rs. 2,159/-",
        image: "images/featurejeans.jpg",
        description:"Silver-grey wide-leg trousers in a soft satin finish. The relaxed, flowy fit drapes beautifully with movement, offering a chic balance of comfort and sophistication — ideal for elevated casual looks or evening occasions",
        category:"mensjeans"
    },

    13:{
        name:"VAIRON-Gold Ankle-Strap Heels",
        price:"Rs. 3,859/-",
        image: "images/womenheels1.jpg",
        description:"Metallic gold heels with a delicate double ankle strap and open-toe design. The slim stiletto heel adds height and elegance, making these the perfect finishing touch for both daytime glam and night-out looks",
        category:"footwear"
    },
    14:{
        name:"VAIRON-Checked Flannel Shirt",
        price:"Rs. 1,159/-",
        image: "images/featuremens.jpg",
        description:"A classic brown-and-cream checked button-down shirt with a relaxed fit. Soft, breathable fabric and a timeless pattern make it a versatile layering piece for casual outings or laid-back weekends.",
        category:"checkshirt"
    },
    15:{
        name:"VAIRON-Pleated Denim Shorts",
        price:"Rs. 1,859/-",
        image: "images/womendenimshorts.jpg",
        description:"A dark denim mini skirt featuring a ruffled, pleated hem for added movement and flair. High-waisted and flattering, it pairs effortlessly with tops of any style for a playful yet put-together look.",
        category:"shorts"
    },

    16: {
        name:"VAIRON-Denim Heart Dungaree",
        price:"Rs. 990/-",
        image: "images/kidsjumpsuit.jpg",
        description:"Soft denim dungarees featuring an adorable heart patch on the bib. Adjustable straps and a comfy elastic waist make it easy to move and play. Paired here with a classic striped long-sleeve tee, this set is perfect for everyday adventures with a touch of sweetness.",
        category:"jumpsuit"
    },
    17: {
        name:"VAIRON-Classic Cargo Joggers",
        price:"Rs. 879/-",
        image: "images/kidsbptrack.jpg",
        description:"Comfortable khaki cargo joggers with a drawstring waist and functional side pockets. Made from durable, breathable fabric, they're built for active little ones who need room to run, climb, and explore all day long without compromising on comfort.",
        category:"trackpant"
    },
    18: {
        name:"VAIRON-Ruby Mary jane Shoes",
        price:"Rs. 1.220/-",
        image: "images/kidsshoe.jpg",
        description:"Classic patent-red Mary Jane shoes with an adjustable buckle strap. Timeless and versatile, these shoes dress up any outfit while offering all-day comfort for little feet, making them perfect for parties, playdates, or everyday wear",
        category:"girlshoe"
    },
    19: {
        name:"VAIRON-Playful Pink Polo",
        price:"Rs. 770/-",
        image: "images/kidstees.jpg",
        description:"A vibrant pink polo shirt with bold graphic lettering and a crisp white collar. Made from soft cotton for everyday comfort, this playful top adds a fun, sporty vibe to any casual outfit.",
        category:"girltees"
    },
    20: {
        name:"VAIRON-Palm Print Shirt",
        price:"Rs. 980/-",
        image: "images/kidsteesboy.jpg",
        description:"A textured sage-green button-down shirt with charming palm tree embroidery. Lightweight and breathable, this shirt is perfect for warm days, blending comfort with a relaxed, tropical-inspired style for your little explorer",
        category:"boyshirt"
    },
    21: {
        name:"VAIRON-Colourblock Velcro Sneakers",
        price:"Rs. 1,390/-",
        image: "images/kidsshoeboy.jpg",
        description:"Fun multicolour sneakers with easy velcro straps for quick on-and-off wear. The sturdy sole and cushioned fit support active play, while the bold color-blocking adds a playful pop to any outfit.",
        category:"boyshoe"
    },
    22: {
        name:"VAIRON-Denim Layered Dress",
        price:"Rs. 1,120/-",
        image: "images/kidsfrock1.jpg",
        description:"A charming denim pinafore dress layered over a striped long-sleeve top. Button details and a flowy skirt add a classic, put-together look that's easy to wear and perfect for both casual days and special occasions.",
        category:"girlfrock"
    },
    23: {
        name:"VAIRON-Classic Denim Jeans",
        price:"Rs. 1,590/-",
        image: "images/kidsjeans2.jpg",
        description:"Sturdy dark-wash denim jeans designed for everyday durability. With a comfortable fit and timeless style, these jeans are a wardrobe staple that pairs effortlessly with any top for a laid-back, put-together look",
        category:"boypant"
    },
    24: {
        name:"VAIRON-Graphic Beast Tee",
        price:"Rs. 1,290/-",
        image: "images/kidsboytees3.jpg",
        description:"A cool navy tee featuring a bold Top Beast monster truck graphic print. Soft cotton fabric ensures comfort, while the fun design makes it a favorite for kids who love adventure-themed style.",
        category:"boytees"
    },
    25: {
        name:"VAIRON-Rainbow Flare Pants",
        price:"Rs. 1,190/-",
        image: "images/kidsjean5.jpg",
        description:"Soft sky-blue flare pants featuring a cheerful rainbow print along one leg. Comfortable and stretchy, these pants are perfect for imaginative play, dance, or just adding a joyful splash of color to everyday looks",
        category:"girlpant"
    },
    26: {
        name:"VAIRON-Gingham Ruffle Top",
        price:"Rs. 970/-",
        image: "images//kidsgtops.jpg",
        description:"A red-and-white gingham top with delicate ruffle trim and tie-strap shoulders. Lightweight and breezy, this top brings a sweet, vintage-inspired charm perfect for warm days and playful summer outfits",
        category:"girltop"
    },
    27: {
        name:"VAIRON-Striped Wide Leg Pants",
        price:"Rs. 670/-",
        image: "images/kidsbshorts.jpg",
        description:"Bold navy-and-cream striped wide-leg pants with an elastic drawstring waist. Comfortable and stylish, these pants offer a relaxed fit with a fun, statement-making pattern that stands out in any kid's wardrobe",
        category:"trackpant"
    },

    28: {
        name:"VAIRON- Leather Brown Jacket Men  ",
        price:"Rs. 3,859/-",
        image: "images/leatherjacket.jpg ",
        description:"A rugged brown leather bomber jacket featuring a plush shearling collar and cuffs for extra warmth. The zip-front closure and structured silhouette give it a timeless, rugged appeal, making it a versatile statement piece for cooler days and layered outfits alike ",
        category:"jacket"
    },

     29: {
        name:"VAIRON- Light Wash Denim Shorts ",
        price:"Rs. 1,859 /-",
        image: "images/gensshorts.jpg ",
        description:" Classic light-wash denim shorts with a relaxed fit and clean five-pocket styling. Durable and versatile, these shorts pair effortlessly with tees or shirts for an easy, casual look perfect for warm-weather days.",
        category:"menshorts"
    },

     30: {
        name:"VAIRON- Retro Running Sneakers",
        price:"Rs. 3,859 /-",
        image: "images/gensshoe.jpg ",
        description:"Silver-and-white retro-style sneakers featuring a chunky sole and mesh paneling for breathability. Combining a sporty aesthetic with everyday comfort, these sneakers are a versatile pick for both athletic wear and casual streetwear looks ",
        category:"menshoes"
    },

     31: {
        name:"VAIRON- Vintage Jersey #90 ",
        price:"Rs.1,859/-",
        image: "images/genstshirt.jpg ",
        description:"A white and green varsity-style jersey featuring bold  numbering and a ribbed V-neck collar. With a relaxed, oversized fit, this jersey brings a retro sporty edge to any casual outfit. ",
        category:"jersey"
    },

     32: {
        name:"VAIRON- Wide-Leg Denim Trousers ",
        price:"Rs. 2,220 /-",
        image: " images/newmenspant.jpg",
        description:" Light-wash wide-leg denim trousers with a relaxed, pleated fit. The loose silhouette offers a comfortable, contemporary update to classic denim, perfect for creating an effortlessly cool streetwear look",
        category:"mensjeans"
    },

     33: {
        name:"VAIRON- Checked Flannel Overshirt ",
        price:"Rs. 2,590 /-",
        image: "images/newmenshirtch.jpg",
        description:"A soft brown-and-cream checked overshirt with a relaxed, boxy fit. Perfect for layering, this shirt combines classic pattern with cozy comfort, making it a versatile addition to any casual wardrobe. ",
        category:"checkshirt"
    },

     34: {
        name:"VAIRON- Tailored Grey Trousers ",
        price:"Rs. 2,859 /-",
        image: "images/genstrousers2.jpg ",
        description:"Sleek grey pleated trousers with a tailored, wide-leg cut. Combining comfort with a polished silhouette, these trousers transition easily from smart-casual daywear to elevated evening looks. ",
        category:"pant"
    },

     35: {
        name:"VAIRON- Palace Athletic Jacket  ",
        price:"Rs. 2,559 /-",
        image: "images/genssport.jpg ",
        description:"A bold navy-and-red varsity jacket featuring the  graphic across the chest. With a ribbed collar and cuffs, this jacket delivers a sporty, statement-making look perfect for streetwear styling ",
        category:"sportswear"
    },

     36: {
        name:"VAIRON- Relaxed Linen Shirt ",
        price:"Rs. 2,590 /-",
        image: " images/genscottshit.jpg",
        description:"A breezy olive-green linen shirt with a relaxed, open collar and rolled sleeves. The lightweight fabric offers effortless comfort, making it perfect for warm days when you want an easy, laid-back look with a touch of understated style ",
        category:"mentees"
    },

     37: {
        name:"VAIRON- Colourblock Windbreaker ",
        price:"Rs. 4,859 /-",
        image: " images/gensjackets.jpg",
        description:"A bold colourblock windbreaker in teal, brown, and cream tones with a full-zip front. The lightweight, wind-resistant fabric makes it ideal for active days, while the sporty silhouette adds a streetwear-inspired edge to any casual outfit. ",
        category:"jacket"
    },

     38: {
        name:"VAIRON- Limitless Graphic Polo ",
        price:"Rs. 2,389/-",
        image: "images/genskurta.jpg ",
        description:"A crisp white polo featuring a bold Limitless script print and a contrasting brown collar. Paired with a tied brown sash detail, this polo brings a fresh, sporty-preppy vibe to casual streetwear looks.",
        category:"menshirt"
    },

     39: {
        name:"VAIRON- Relaxed Cream Henley ",
        price:"Rs. 1,599 /-",
        image: "images/gens2casual.jpg ",
        description:"A soft cream henley shirt with a buttoned neckline and rolled-up sleeves. The relaxed, breathable fit makes it a comfortable everyday essential that pairs effortlessly with jeans or trousers for a clean, minimal look ",
        category:"mensplain"
    },


    49: {
        name:"VAIRON- Faux Leather Bomber Jacket",
        price:"Rs. 3,669 /-",
        image: "images/mensjackets5.jpg ",
        description:" A sleek black faux-leather bomber jacket with a structured silhouette and zip-front closure. Sharp and versatile, this jacket adds an instant edge to any outfit, transitioning easily from casual daywear to a bold night-out look.",
        category:"jacket"
    },
    
     40: {
        name:"VAIRON- BARE Première Artistic Volume Mascara ",
        price:"Rs.1,159 /-",
        image: "images/beautymascara.jpg",
        description:"A luxurious gold-tone volumizing mascara designed to lift, curl, and dramatically thicken every lash from root to tip. The precision brush separates lashes evenly while delivering an intense, jet-black pigment that resists smudging and flaking throughout the day. Ideal for anyone wanting a bold, sultry eye look, this mascara builds buildable drama without clumping, making it perfect for both everyday wear and glam evening looks ",
        category:"mascara"
    },

     41: {
        name:"VAIRON- Rare Beauty Lip Liner Set ",
        price:"Rs.3,859 /-",
        image: "images/beautylipliners.jpg ",
        description:" A curated collection of richly pigmented lip liners spanning deep reds, dusty roses, and warm berries. Each liner glides on smoothly with a creamy, long-lasting formula that defines lips crisply while doubling as a base for fuller lip color. Versatile enough to wear alone for a soft matte finish or layered under lipstick for extra staying power, this set covers every mood from natural to bold.",
        category:"lipliner"
    },

     42: {
        name:"VAIRON- Swiss Beauty Bold & Black Kajal",
        price:"Rs. 859/-",
        image: "images/beautykajals.jpg",
        description:"An intensely pigmented kajal pencil built for dramatic, smudge-proof definition. The soft, glide-on formula deposits rich black color in one stroke, making it easy to create anything from a subtle everyday line to a bold smoky effect. Long-wearing and waterproof, this kajal stays put through humidity, tears, and long days without fading or smudging. ",
        category:"kajal"
    },

     43: {
        name:"VAIRON- Rare Beauty Liquid Blush & Highlighter Duo",
        price:"Rs. 1,559/-",
        image: "images/lipglosspart2.jpg ",
        description:" A weightless, buildable liquid blush paired with a dewy highlighter for the ultimate natural glow. Blendable with fingertips or a brush, the lightweight formula melts seamlessly into skin for a soft, flushed finish that looks like your own natural radiance, only better. Perfect for anyone chasing that effortless, sun-kissed look",
        category:"blush"
    },

     44: {
        name:"VAIRON- Sandstone Hide & Blend Concealer ",
        price:"Rs. 789 /-",
        image: " images/beautyconcelear.jpg",
        description:"A full-coverage concealer designed to erase dark circles, blemishes, and redness without looking cakey. The creamy, blendable texture melts into skin for a smooth, natural finish that lasts all day. Lightweight yet buildable, it's ideal for both quick touch-ups and full-coverage makeup looks. ",
        category:"concealer"
    },

     45: {
        name:"VAIRON- ANNY Nail Polish",
        price:"Rs. 390/-",
        image: " images/nailpolish.jpg",
        description:"A rich, deep berry-black nail polish with a glossy, salon-quality finish. The smooth formula glides on evenly in just one or two coats, delivering vibrant, long-lasting color that resists chipping. A striking choice for anyone who loves bold, statement nails for any season. ",
        category:"nailpolish"
    },

     46: {
        name:"VAIRON- Rare Beauty Lip Gloss Set ",
        price:"Rs. 4,590/-",
        image: " images/beautylip2.jpg",
        description:"A set of high-shine lip glosses in a range of universally flattering shades, from soft nudes to vibrant berries. The non-sticky formula glides on smoothly, leaving lips looking plump and glossy without any tackiness. Perfect for layering over lipstick or wearing alone for a fresh, glazed-lip look. ",
        category:"lipgloss"
    },

     47: {
        name:"VAIRON- Professional Makeup Brush Duo ",
        price:"Rs. 650/-",
        image: "images/beautybrush.jpg ",
        description:" A set of soft, densely packed makeup brushes designed for flawless blending. The angled and rounded heads make it easy to buff foundation, blush, or powder into skin seamlessly, leaving a smooth, airbrushed finish. A must-have tool for both beginners and makeup lovers who want salon-quality application at home",
        category:"makeupbrush"
    },

     48: {
        name:"VAIRON- Compact Pressed Powder",
        price:"Rs. 880 /-",
        image: "images/compactpowder.jpg ",
        description:"A dual-compact pressed powder designed to set makeup and control shine throughout the day. The finely milled formula blurs imperfections and locks in your base without adding heaviness, giving skin a smooth, matte finish that lasts. Compact and travel-friendly, it's perfect for quick touch-ups on the go ",
        category:"compact"
    },                                   

    50: {
        name:"VAIRON- Cotton linen white",
        price:"Rs. 2,880 /-",
        image: "images/ronalbanner500.jpg",
        description:"A dual-compact pressed powder designed to set makeup and control shine throughout the day. The finely milled formula blurs imperfections and locks in your base without adding heaviness, giving skin a smooth, matte finish that lasts. Compact and travel-friendly, it's perfect for quick touch-ups on the go ",
        category:"mensplain"
    },

    51: {
        name:"VAIRON- plaid shirt menswear",
        price:"Rs.3,880 /-",
        image: "images/ronalbanner51.png ",
        description:"Relaxed fit Soft, breathable fabric and a timeless pattern make it a versatile layering piece for casual outings or laid-back weekends.",
        category:"checkshirt"
    },
     52: {
        name:"VAIRON- partywear frock",
        price:"Rs.1,880 /-",
        image: "images/frock3.jpg ",
        description:"Partywear frocks elevate classic charm with celebratory elegance, featuring sparkling sequins, rich velvet, delicate lace, or voluminous tulle skirts. Designed with striking necklines, intricate embellishments, and flowy silhouettes, these dresses make a bold visual impact. Perfect for birthdays, festivities, and evening events, they combine glamorous style with comfortable grace for memorable occasions.",
        category:"frock"
    },
    53: {
        name:"VAIRON- partywear frock",
        price:"Rs.1,880 /-",
        image: "images/frockextra1.jpg ",
        description:"Partywear frocks elevate classic charm with celebratory elegance, featuring sparkling sequins, rich velvet, delicate lace, or voluminous tulle skirts. Designed with striking necklines, intricate embellishments, and flowy silhouettes, these dresses make a bold visual impact. Perfect for birthdays, festivities, and evening events, they combine glamorous style with comfortable grace for memorable occasions.",
        category:"frock"
    },

    54: {
        name:"VAIRON- girls fashion trendy tops",
        price:"Rs.1,880 /-",
        image: "images/extratop.jpg ",
        description:"Girls' casual wear blends effortless comfort with versatile style, built around everyday essentials. Wardrobe staples like relaxed denim jeans, Graphic tees, cropped hoodies, and breathable cotton tops offer easy mix-and-match potential. Complemented by versatile layers like oversized denim jackets or knit cardigans, these outfits prioritize relaxed fits, soft fabrics, and expressive everyday fashion.",
        category:"tops"
    },
    55: {
        name:"VAIRON- girls fashion trendy tops",
        price:"Rs.1,880 /-",
        image: "images/extratop1.jpg ",
        description:"Girls' casual wear blends effortless comfort with versatile style, built around everyday essentials. Wardrobe staples like relaxed denim jeans, Graphic tees, cropped hoodies, and breathable cotton tops offer easy mix-and-match potential. Complemented by versatile layers like oversized denim jackets or knit cardigans, these outfits prioritize relaxed fits, soft fabrics, and expressive everyday fashion.",
        category:"tops"
    },
    56: {
        name:"VAIRON- girls fashion trendy tops",
        price:"Rs.1,880 /-",
        image: "images/extratop2.jpg ",
        description:"Girls' casual wear blends effortless comfort with versatile style, built around everyday essentials. Wardrobe staples like relaxed denim jeans, Graphic tees, cropped hoodies, and breathable cotton tops offer easy mix-and-match potential. Complemented by versatile layers like oversized denim jackets or knit cardigans, these outfits prioritize relaxed fits, soft fabrics, and expressive everyday fashion.",
        category:"tops"
    },
    57: {
        name:"VAIRON- girls fashion trendy tops",
        price:"Rs.1,880 /-",
        image: "images/extratop3.jpg ",
        description:"Girls' casual wear blends effortless comfort with versatile style, built around everyday essentials. Wardrobe staples like relaxed denim jeans, Graphic tees, cropped hoodies, and breathable cotton tops offer easy mix-and-match potential. Complemented by versatile layers like oversized denim jackets or knit cardigans, these outfits prioritize relaxed fits, soft fabrics, and expressive everyday fashion.",
        category:"tops"
    },
    58: {
        name:"VAIRON- daily usable fashion handbag",
        price:"Rs.1,880 /-",
        image: "images/extrabag1.jpg ",
        description:"From structured top-handle bags and sleek leather crossbodies to spacious canvas totes and compact shoulder bags, they offer versatile options. Designed with practical compartments, durable materials, and refined accents, these essential accessories seamlessly hold daily belongings while elevating everyday style",
        category:"handbags"
    },
    59: {
        name:"VAIRON- daily usable fashion handbag",
        price:"Rs.1,880 /-",
        image: "images/extrabag2.jpg ",
        description:"From structured top-handle bags and sleek leather crossbodies to spacious canvas totes and compact shoulder bags, they offer versatile options. Designed with practical compartments, durable materials, and refined accents, these essential accessories seamlessly hold daily belongings while elevating everyday style",
        category:"handbags"
    },
    60: {
        name:"VAIRON- daily usable fashion handbag",
        price:"Rs.1,880 /-",
        image: "images/extrabag3.jpg ",
        description:"From structured top-handle bags and sleek leather crossbodies to spacious canvas totes and compact shoulder bags, they offer versatile options. Designed with practical compartments, durable materials, and refined accents, these essential accessories seamlessly hold daily belongings while elevating everyday style",
        category:"handbags"
    },
    61: {
        name:"VAIRON- mens denim jeans",
        price:"Rs.1,880 /-",
        image: "images/extrajean1.jpg ",
        description:"Light-wash wide-leg denim trousers with a relaxed, pleated fit. The loose silhouette offers a comfortable, contemporary update to classic denim, perfect for creating an effortlessly cool streetwear look",
        category:"mensjeans"
    },
    62: {
        name:"VAIRON- mens denim jeans",
        price:"Rs.1,880 /-",
        image: "images/extrajean2.jpg ",
        description:"Light-wash wide-leg denim trousers with a relaxed, pleated fit. The loose silhouette offers a comfortable, contemporary update to classic denim, perfect for creating an effortlessly cool streetwear look",
        category:"mensjeans"
    },
    63: {
        name:"VAIRON- mens denim jeans",
        price:"Rs.1,880 /-",
        image: "images/extrajean3.jpg ",
        description:"Light-wash wide-leg denim trousers with a relaxed, pleated fit. The loose silhouette offers a comfortable, contemporary update to classic denim, perfect for creating an effortlessly cool streetwear look",
        category:"mensjeans"
    },
    64: {
        name:"VAIRON- partywear heels footwear",
        price:"Rs.1,880 /-",
        image: "images/extrafoot1.jpg ",
        description:"Heels bring instant sophistication and poise to any outfit, transforming simple looks with elevated style. From sleek stilettos and sturdy block heels to comfortable wedges and chic mules, they offer varied heights and silhouettes. Designed in soft suedes, glossy leathers, and eye-catching straps, heels elongate the frame while making a confident fashion statement.",
        category:"footwear"
    },
    65: {
        name:"VAIRON- partywear heels footwear",
        price:"Rs.2,880 /-",
        image: "images/extrafoot2.jpg ",
        description:"Heels bring instant sophistication and poise to any outfit, transforming simple looks with elevated style. From sleek stilettos and sturdy block heels to comfortable wedges and chic mules, they offer varied heights and silhouettes. Designed in soft suedes, glossy leathers, and eye-catching straps, heels elongate the frame while making a confident fashion statement.",
        category:"footwear"
    },
    66: {
        name:"VAIRON- Checked Flannel Overshirt",
        price:"Rs.1,880 /-",
        image: "images/extracheck1.jpg ",
        description:"A soft  checked overshirt with a relaxed, boxy fit. Perfect for layering, this shirt combines classic pattern with cozy comfort, making it a versatile addition to any casual wardrobe.",
        category:"checkshirt"
    },
    67: {
        name:"VAIRON- Checked Flannel Overshirt",
        price:"Rs.1,880 /-",
        image: "images/extracheck2.jpg ",
        description:"A soft  checked overshirt with a relaxed, boxy fit. Perfect for layering, this shirt combines classic pattern with cozy comfort, making it a versatile addition to any casual wardrobe.",
        category:"checkshirt"
    },
    68: {
        name:"VAIRON- denim ruffle mini skirt ",
        price:"Rs.2,880 /-",
        image: "images/extraskirt1.jpg ",
        description:"A dark denim mini skirt featuring a ruffled, pleated hem for added movement and flair. High-waisted and flattering, it pairs effortlessly with tops of any style for a playful yet put-together look",
        category:"shorts"
    },
    69: {
        name:"VAIRON- denim ruffle mini skirt",
        price:"Rs.3,880 /-",
        image: "images/extraskirt2.jpg ",
        description:"A dark denim mini skirt featuring a ruffled, pleated hem for added movement and flair. High-waisted and flattering, it pairs effortlessly with tops of any style for a playful yet put-together look",
        category:"shorts"
    },
    70: {
        name:"VAIRON- casualwear jean ",
        price:"Rs.1,880 /-",
        image: "images/extrawjean1.jpg ",
        description:"A dark denim mini skirt featuring a ruffled, pleated hem for added movement and flair. High-waisted and flattering, it pairs effortlessly with tops of any style for a playful yet put-together look",
        category:"womenjeans"
    },
    71: {
        name:"VAIRON- casualwear jean",
        price:"Rs.3,880 /-",
        image: "images/extrawjean2.jpg ",
        description:"A dark denim mini skirt featuring a ruffled, pleated hem for added movement and flair. High-waisted and flattering, it pairs effortlessly with tops of any style for a playful yet put-together look",
        category:"womenjeans"
    },
    72: {
        name:"VAIRON- casualwear jean",
        price:"Rs.1,880 /-",
        image: "images/extrawjean3.jpg ",
        description:"A dark denim mini skirt featuring a ruffled, pleated hem for added movement and flair. High-waisted and flattering, it pairs effortlessly with tops of any style for a playful yet put-together look",
        category:"womenjeans"
    },
    73: {
        name:"VAIRON- bodycon wear",
        price:"Rs.1,880 /-",
        image: "images/extrabodycon1.jpg ",
        description:"Bodycon wear offers a sleek, form-fitting silhouette designed to hug the bodys natural contours. Crafted from stretchy, flexible fabrics like ribbed knits, spandex, and jersey, bodycon dresses and skirts deliver a bold, confident statement. Whether styled down with sneakers or elevated with heels, they provide a modern, body-sculpting look.",
        category:"bodycon"
    },
    74: {
        name:"VAIRON- bodycon wear",
        price:"Rs.1,880 /-",
        image: "images/extrabodycon2.jpg ",
        description:"Bodycon wear offers a sleek, form-fitting silhouette designed to hug the bodys natural contours. Crafted from stretchy, flexible fabrics like ribbed knits, spandex, and jersey, bodycon dresses and skirts deliver a bold, confident statement. Whether styled down with sneakers or elevated with heels, they provide a modern, body-sculpting look.",
        category:"bodycon"
    },
    75: {
        name:"VAIRON- waterproof mascara",
        price:"Rs.1,880 /-",
        image: "images/mascara1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"mascara"
    },
    76: {
        name:"VAIRON- waterproof mascara",
        price:"Rs.1,880 /-",
        image: "images/mascara2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"mascara"
    },
    77: {
        name:"VAIRON- waterproof mascara",
        price:"Rs.1,880 /-",
        image: "images/mascara3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"mascara"
    },
    78: {
        name:"VAIRON- fav shades of lipliners",
        price:"Rs.1,880 /-",
        image: "images/lipliner1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipliner"
    },
    79: {
        name:"VAIRON- fav shades of lipliners",
        price:"Rs.1,880 /-",
        image: "images/lipliner2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipliner"
    },
    80: {
        name:"VAIRON- beauty product",
        price:"Rs.1,880 /-",
        image: "images/lipliner3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipliner"
    },
    81: {
        name:"VAIRON- waterproof kajal",
        price:"Rs.1,880 /-",
        image: "images/kajal1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"kajal"
    },
    82: {
        name:"VAIRON- waterproof kajal",
        price:"Rs.1,880 /-",
        image: "images/kajal2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"kajal"
    },
    83: {
        name:"VAIRON- beauty products ",
        price:"Rs.1,880 /-",
        image: "images/kajal3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"kajal"
    },
    84: {
        name:"VAIRON- beauty products",
        price:"Rs.1,880 /-",
        image: "images/blush1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"blush"
    },
    85: {
        name:"VAIRON- beauty products",
        price:"Rs.1,880 /-",
        image: "images/blush2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"blush"
    },
    86: {
        name:"VAIRON- beauty products",
        price:"Rs.1,880 /-",
        image: "images/blush3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"blush"
    },
    87: {
        name:"VAIRON- beauty products",
        price:"Rs.1,880 /-",
        image: "images/blush4.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"blush"
    },
    89: {
        name:"VAIRON- beauty products ",
        price:"Rs.1,880 /-",
        image: "images/con1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"concealer"
    },
    90: {
        name:"VAIRON- beauty products ",
        price:"Rs.1,880 /-",
        image: "images/con2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"concealer"
    },
    91: {
        name:"VAIRON- beauty products",
        price:"Rs.1,880 /-",
        image: "images/con3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"concealer"
    },

    92: {
        name:"VAIRON- beauty products ",
        price:"Rs.889 /-",
        image: "images/nail1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"nailpolish"
    },
    93: {
        name:"VAIRON- beauty products ",
        price:"Rs.889/-",
        image: "images/nail2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"nailpolish"
    },
    94: {
        name:"VAIRON- beauty products",
        price:"Rs. 1,980 /-",
        image: "images/nail3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"nailpolish"
    },
    95: {
        name:"VAIRON- beauty products",
        price:"Rs. 2,390 /-",
        image: "images/lip1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipgloss"
    },
    96: {
        name:"VAIRON- beauty products ",
        price:"Rs.3,902/-",
        image: "images/lip2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipgloss"
    },
    97: {
        name:"VAIRON- beauty products",
        price:"Rs.2,999/-",
        image: "images/lip3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipgloss"
    },
    98: {
        name:"VAIRON- beauty products",
        price:"Rs. 1,289 /-",
        image: "images/lip4.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"lipgloss"
    },
    99: {
        name:"VAIRON- beauty products",
        price:"Rs.2,890 /-",
        image: "images/mas1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"makeupbrush"
    },
    100: {
        name:"VAIRON- beauty products",
        price:"Rs.679/-",
        image: "images/mas2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"makeupbrush"
    },
    101: {
        name:"VAIRON- beauty products ",
        price:"Rs. 789 /-",
        image: "images/mas3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"makeupbrush"
    },
    102: {
        name:"VAIRON- beauty products",
        price:"Rs.999 /-",
        image: "images/mas4.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"makeupbrush"
    },
    103: {
        name:"VAIRON- beauty products ",
        price:"Rs.2,897/-",
        image: "images/com1.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"compact"
    },
    104: {
        name:"VAIRON- beauty products",
        price:"Rs.2,389/-",
        image: "images/com2.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"compact"
    },
    105: {
        name:"VAIRON- beauty products ",
        price:"Rs.1,289/-",
        image: "images/com3.jpg ",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"compact"
    },
    106: {
        name:"VAIRON- beauty products ",
        price:"Rs.1,289/-",
        image: "images/com4.jpg",
        description:"Enhance your beauty routine with this carefully crafted product designed to provide a smooth, fresh, and radiant look. Its lightweight and easy-to-use formula offers comfortable application and a pleasant feel. Perfect for everyday use, it helps you feel confident, refreshed, and beautifully cared for throughout the day.",
        category:"compact"
    },          

    107: {
        name:"VAIRON- partywear frock  ",
        price:"Rs.3,899/-",
        image: "images/brownfrock.jpg",
        description:"Partywear frocks elevate classic charm with celebratory elegance, featuring sparkling sequins, rich velvet, delicate lace, or voluminous tulle skirts. Designed with striking necklines, intricate embellishments, and flowy silhouettes, these dresses make a bold visual impact. Perfect for birthdays, festivities, and evening events, they combine glamorous style with comfortable grace for memorable occasions",
        category:"frock"
    },
    108: {
        name:"VAIRON- partywear frock ",
        price:"Rs.3,490/-",
        image: "images/frockextra.jpg ",
        description:"Partywear frocks elevate classic charm with celebratory elegance, featuring sparkling sequins, rich velvet, delicate lace, or voluminous tulle skirts. Designed with striking necklines, intricate embellishments, and flowy silhouettes, these dresses make a bold visual impact. Perfect for birthdays, festivities, and evening events, they combine glamorous style with comfortable grace for memorable occasions",
        category:"frock"
    },
    109: {
        name:"VAIRON- partywear frock ",
        price:"Rs.3,209/-",
        image: "images/newinfrock.jpg ",
        description:"Partywear frocks elevate classic charm with celebratory elegance, featuring sparkling sequins, rich velvet, delicate lace, or voluminous tulle skirts. Designed with striking necklines, intricate embellishments, and flowy silhouettes, these dresses make a bold visual impact. Perfect for birthdays, festivities, and evening events, they combine glamorous style with comfortable grace for memorable occasions",
        category:"frock"
    },
    110: {
        name:"VAIRON- partywear frock ",
        price:"Rs. 2,210 /-",
        image: "images/frock4.jpg ",
        description:"Partywear frocks elevate classic charm with celebratory elegance, featuring sparkling sequins, rich velvet, delicate lace, or voluminous tulle skirts. Designed with striking necklines, intricate embellishments, and flowy silhouettes, these dresses make a bold visual impact. Perfect for birthdays, festivities, and evening events, they combine glamorous style with comfortable grace for memorable occasions",
        category:"frock"
    },

    111: {
        name:"VAIRON- kids jumpsuits ",
        price:"Rs.2,290/-",
        image: "images/jump1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"jumpsuit"
    },
    112: {
        name:"VAIRON- kids jumpsuits",
        price:"Rs. 1,220/-",
        image: "images/jump2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"jumpsuit"
    },
    113: {
        name:"VAIRON- kids jumpsuits",
        price:"Rs. 3,330 /-",
        image: "images/jump3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"jumpsuit"
    },
    114: {
        name:"VAIRON- boy's track pant casual ",
        price:"Rs.1,229/-",
        image: "images/track1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"trackpant"
    },
    115: {
        name:"VAIRON- boy's track pant casual",
        price:"Rs.2,339/-",
        image: "images/track2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"trackpant"
    },
    116: {
        name:"VAIRON- boy's track pant casual",
        price:"Rs.2,339/-",
        image: "images/track3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"trackpant"
    },
    117: {
        name:"VAIRON- boy's track pant casual",
        price:"Rs.1,228/-",
        image: "images/track4.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"trackpant"
    },
    118: {
        name:"VAIRON- girls modern footwear",
        price:"Rs.3,339/-",
        image: "images/chapal1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlshoe"
    },
    119: {
        name:"VAIRON- girls modern footwear",
        price:"Rs.4,999/-",
        image: "images/chap2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlshoe"
    },
    120: {
        name:"VAIRON- girls modern footwear",
        price:"Rs.5,888/-",
        image: "images/chap3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlshoe"
    },
    121: {
        name:"VAIRON- girls casual tees",
        price:"Rs.999/-",
        image: "images/tee1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltees"
    },
    122: {
        name:"VAIRON- girls casual tees",
        price:"Rs.1,888/-",
        image: "images/tee2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltees"
    },
    123: {
        name:"VAIRON- girls casual tees",
        price:"Rs. 2,338 /-",
        image: "images/tee3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltees"
    },
    124: {
        name:"VAIRON- boys casual wear",
        price:"Rs.2,222/-",
        image: "images/tshirt1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boyshirt"
    },
    125: {
        name:"VAIRON- boys casual wear",
        price:"Rs.1,299/-",
        image: "images/tshirt2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boyshirt"
    },
    126: {
        name:"VAIRON- boys trendy shoes ",
        price:"Rs.2,399/-",
        image: "images/boyshoe.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boyshoe"
    },
    127: {
        name:"VAIRON- boys trendy shoes",
        price:"Rs. 3,899/-",
        image: "images/boyshoe1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boyshoe"
    },
    128: {
        name:"VAIRON-  girls cute fashion frock",
        price:"Rs.999/-",
        image: "images/kfrock1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlfrock"
    },
    129: {
        name:"VAIRON- girls cute fashion frock",
        price:"Rs.1,999/-",
        image: "images/kfrock2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlfrock"
    },
    130: {
        name:"VAIRON- girls cute fashion frock",
        price:"Rs.2,999/-",
        image: "images/kfrock3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlfrock"
    },
    131: {
        name:"VAIRON- boys denim casul wear ",
        price:"Rs.3,339/-",
        image: "images/boyjean.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boypant"
    },
    132: {
        name:"VAIRON- boys denim casul wear",
        price:"Rs.2,999/-",
        image: "images/boyjean1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boypant"
    },

    133: {
        name:"VAIRON- boys trendy tees",
        price:"Rs.3,900/-",
        image: "images/btee1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boytees"
    },
    134: {
        name:"VAIRON- boys trendy tees",
        price:"Rs.4,000/-",
        image: "images/btee2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boytees"
    },
    135: {
        name:"VAIRON- boys trendy tees",
        price:"Rs.2,399/-",
        image: "images/btee3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"boytees"
    },
    136: {
        name:"VAIRON- girls fashion tops",
        price:"Rs. 1,220/-",
        image: "images/gtops.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltop"
    },
    137: {
        name:"VAIRON- girls fashion tops",
        price:"Rs.3,999/-",
        image: "images/gtops1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltop"
    },
    138: {
        name:"VAIRON- girls fashion bottomwear",
        price:"Rs.2,399/-",
        image: "images/gtops2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltop"
    },
    139: {
        name:"VAIRON- girls fashion bottomwear",
        price:"Rs.4,899/-",
        image: "images/gtops3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girltop"
    },
    140: {
        name:"VAIRON-girls fashion bottomwear ",
        price:"Rs. 3,888/-",
        image: "images/gpant1.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlpant"
    },
    141: {
        name:"VAIRON- girls fashion bottomwear",
        price:"Rs. 2,999/-",
        image: "images/gpant2.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlpant"
    },
    142: {
        name:"VAIRON- girls fashion bottomwear",
        price:"Rs. 2,339/-",
        image: "images/gpant3.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlpant"
    },
    143: {
        name:"VAIRON- girls fashion bottomwear",
        price:"Rs.2,339/-",
        image: "images/gpant4.jpg ",
        description:"Designed for active play and everyday comfort, these girls pants combine soft, breathable fabrics with a flexible waistband for an easy fit. Featuring durable stitching and fun, trendy cuts, they offer total freedom of movement while staying stylish, making them a perfect staple for school, playdates, and weekend adventures.",
        category:"girlpant"
    },

    144: {
        name:"VAIRON- Suede Leather Jacket",
        price:"Rs. 3,459 /-",
        image: "images/jack.jpg ",
        description:"A rugged brown leather bomber jacket featuring a plush shearling collar and cuffs for extra warmth. The zip-front closure and structured silhouette give it a timeless, rugged appeal, making it a versatile statement piece for cooler days and layered outfits alike",
        category:"jacket"
    },
    145: {
        name:"VAIRON- light wash shorts ",
        price:"Rs. 1,289/-",
        image: "images/short1.jpg ",
        description:"Classic light-wash denim shorts with a relaxed fit and clean five-pocket styling. Durable and versatile, these shorts pair effortlessly with tees or shirts for an easy, casual look perfect for warm-weather days",
        category:"menshorts"
    },
    146: {
        name:"VAIRON- light wash shorts",
        price:"Rs. 2,134 /-",
        image: "images/short2.jpg ",
        description:"Classic light-wash denim shorts with a relaxed fit and clean five-pocket styling. Durable and versatile, these shorts pair effortlessly with tees or shirts for an easy, casual look perfect for warm-weather days",
        category:"menshorts"
    },
    147: {
        name:"VAIRON- light wash shorts ",
        price:"Rs. 2,339 /-",
        image: "images/short3.jpg ",
        description:"Classic light-wash denim shorts with a relaxed fit and clean five-pocket styling. Durable and versatile, these shorts pair effortlessly with tees or shirts for an easy, casual look perfect for warm-weather days",
        category:"menshorts"
    },
    148: {
        name:"VAIRON- Black Leather Formal Shoes ",
        price:"Rs. 3,339 /-",
        image: "images/shoe1.jpg ",
        description:"Crafted with a smooth polished finish and refined design, these formal oxford shoes deliver timeless elegance for professional, business, and evening occasions. The structured silhouette features fine stitching and a low heel, offering a sophisticated look that pairs effortlessly with tailored suits, trousers, or corporate attire.",
        category:"menshoes"
        
    },
    149: {
        name:"VAIRON- White & Silver Sport Sneakers ",
        price:"Rs. 4,339/-",
        image: "images/shoe2.jpg ",
        description:"Crafted with a smooth polished finish and refined design, these formal oxford shoes deliver timeless elegance for professional, business, and evening occasions. The structured silhouette features fine stitching and a low heel, offering a sophisticated look that pairs effortlessly with tailored suits, trousers, or corporate attire.",
        category:"menshoes"
    },
    150: {
        name:"VAIRON- sports wear shoe ",
        price:"Rs. 4,599 /-",
        image: "images/shoe3.jpg ",
        description:"Crafted with a smooth polished finish and refined design, these formal oxford shoes deliver timeless elegance for professional, business, and evening occasions. The structured silhouette features fine stitching and a low heel, offering a sophisticated look that pairs effortlessly with tailored suits, trousers, or corporate attire.",
        category:"menshoes"
    },
    151: {
        name:"VAIRON- jersey wear ",
        price:"Rs. 3,229 /-",
        image: "images/jer1.jpg ",
        description:"Crafted from premium stretch-knit fabric, the mens dress jersey offers an ideal blend of breathable comfort and tailored sophistication. Featuring a clean structure, soft feel, and sleek drape, it provides effortless mobility while maintaining a polished appearance, making it a versatile essential for modern smart-casual and professional wardrobes.",
        category:"jersey"
    },
    152: {
        name:"VAIRON- jersey wear ",
        price:"Rs. 3,290/-",
        image: "images/jer2.jpg ",
        description:"Crafted from premium stretch-knit fabric, the mens dress jersey offers an ideal blend of breathable comfort and tailored sophistication. Featuring a clean structure, soft feel, and sleek drape, it provides effortless mobility while maintaining a polished appearance, making it a versatile essential for modern smart-casual and professional wardrobes.",
        category:"jersey"
    },
    153: {
        name:"VAIRON- jersey wear ",
        price:"Rs. 1,200/-",
        image: "images/jer3.jpg ",
        description:"Crafted from premium stretch-knit fabric, the mens dress jersey offers an ideal blend of breathable comfort and tailored sophistication. Featuring a clean structure, soft feel, and sleek drape, it provides effortless mobility while maintaining a polished appearance, making it a versatile essential for modern smart-casual and professional wardrobes.",
        category:"jersey"
    },
    154: {
        name:"VAIRON-  casual bottom wear ",
        price:"Rs. 1,229 /-",
        image: "images/pant1.jpg ",
        description:"breathable, high-quality cotton, these gents casual pants offer all-day comfort and effortless style. Designed with a tailored yet relaxed fit, durable stitching, and versatile pockets, they move seamlessly with you. Perfect for weekend outings or casual workdays, they pair easily with t-shirts, polos, or casual shirts",
        category:"pant"
    },
    155: {
        name:"VAIRON- casual bottom wear ",
        price:"Rs.2,339/-",
        image: "images/pant2.jpg ",
        description:"breathable, high-quality cotton, these gents casual pants offer all-day comfort and effortless style. Designed with a tailored yet relaxed fit, durable stitching, and versatile pockets, they move seamlessly with you. Perfect for weekend outings or casual workdays, they pair easily with t-shirts, polos, or casual shirts",
        category:"pant"
    },
    156: {
        name:"VAIRON- casual bottom wear ",
        price:"Rs. 3,339/-",
        image: "images/pant3.jpg ",
        description:"breathable, high-quality cotton, these gents casual pants offer all-day comfort and effortless style. Designed with a tailored yet relaxed fit, durable stitching, and versatile pockets, they move seamlessly with you. Perfect for weekend outings or casual workdays, they pair easily with t-shirts, polos, or casual shirts",
        category:"pant"
    },
    157: {
        name:"VAIRON- sports wear",
        price:"Rs. 3,339/-",
        image: "images/sport1.jpg ",
        description:"Engineered from lightweight, moisture-wicking fabric, this mens sportswear shirt keeps you cool, dry, and comfortable during intense workouts. Featuring flexible four-way stretch and ergonomic flatlock seams, it allows unrestricted movement while preventing chafing, making it an essential top for athletic performance, gym sessions, and outdoor running.",
        category:"sportswear"
    },
    158: {
        name:"VAIRON- sports wear ",
        price:"Rs. 1,230/-",
        image: "images/sport2.jpg ",
        description:"Engineered from lightweight, moisture-wicking fabric, this mens sportswear shirt keeps you cool, dry, and comfortable during intense workouts. Featuring flexible four-way stretch and ergonomic flatlock seams, it allows unrestricted movement while preventing chafing, making it an essential top for athletic performance, gym sessions, and outdoor running.",
        category:"sportswear"
    },
    159: {
        name:"VAIRON- sports wear ",
        price:"Rs. 2,222/-",
        image: "images/sport3.jpg ",
        description:"Engineered from lightweight, moisture-wicking fabric, this mens sportswear shirt keeps you cool, dry, and comfortable during intense workouts. Featuring flexible four-way stretch and ergonomic flatlock seams, it allows unrestricted movement while preventing chafing, making it an essential top for athletic performance, gym sessions, and outdoor running.",
        category:"sportswear"
    },
    160: {
        name:"VAIRON- casual wear tees ",
        price:"Rs.1,229/-",
        image: "images/mtees1.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"mentees"
    },
    161: {
        name:"VAIRON- casual wear tees",
        price:"Rs. 2,339/-",
        image: "images/mtees2.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"mentees"
    },
    162: {
        name:"VAIRON- casual wear tees",
        price:"Rs. 2,300/-",
        image: "images/mtees3.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"mentees"
    },
    163: {
        name:"VAIRON- casual wear shirt ",
        price:"Rs. 1,229/-",
        image: "images/k1.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"menshirt"
    },
    164: {
        name:"VAIRON- casual wear shirt ",
        price:"Rs.1,229/-",
        image: "images/k2.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"menshirt"
    },
    165: {
        name:"VAIRON- casual summer wear shirt ",
        price:"Rs.2,330/-",
        image: "images/r1.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"mensplain"
    },
    166: {
        name:"VAIRON- casual summer wear shirt ",
        price:"Rs. 1,300/-",
        image: "images/r2.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"mensplain"
    },
    109: {
        name:"VAIRON- casual summer wear shirt ",
        price:"Rs. 1,200 /-",
        image: "images/r3.jpg ",
        description:"ultra-soft, breathable cotton, this mens t-shirt offers exceptional comfort for effortless everyday wear. Designed with a classic crew neck, relaxed fit, and durable reinforced stitching, it maintains its shape wash after wash. Versatile and timeless, it pairs seamlessly with jeans, shorts, or layered under jackets.",
        category:"mensplain"
    },

}; 









const params=new URLSearchParams(window.location.search);
const productId= params.get("id");
const product =products[productId];


const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".header .navbar");
if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}




if(product){
    document.getElementById("main-product-img").src=product.image;
    document.getElementById("product-name").textContent=product.name;
    document.getElementById("product-price").textContent=product.price;
    document.getElementById("product-desc").textContent=product.description;
}

document.querySelectorAll(".size-btn").forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelectorAll(".size-btn").forEach(b=>b.classList.remove("selected"));
        btn.classList.add("selected")
    });
});

const addToBagBtn = document.getElementById("add-to-bag");
if(addToBagBtn){
    addToBagBtn.addEventListener("click",()=> {
        addToCart(productId);
        showToast(product.name + "added to bag!");
    });
}

document.querySelectorAll(".accordion.btn").forEach(btn=>{
    btn.addEventListener("click",()=> {
        btn.parentElement.classList.toggle("active");
    });
});


document.querySelectorAll(".accordion-btn").forEach(btn=>{
    btn.addEventListener("click",()=> {
        btn.parentElement.classList.toggle("active");
    });
});


if(product){
    const similarGrid = document.getElementById("similar-grid");
    const allIds = Object.keys(products).filter(id =>
         id != productId && products[id].category===product.category
        );
    const randomIds = allIds.sort(() => 0.5 - Math.random()).slice(0,4);

    randomIds.forEach(id => {
        const p = products[id];
        const card = document.createElement("div");
        card.className = "similar-card";
        card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.price}</p>
        `;
        card.addEventListener("click", () => {
            window.location.href = `product.html?id=${id}`;
        });
        similarGrid.appendChild(card);
    });
}
 //-----------------------------CART NOTIFY AND BAG------------------

 function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
 }

 function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
 }

 function addToCart(id){
    let cart = getCart();
    let existing = cart.find(item => item.id == id);
    if(existing){
        existing.qty += 1;
    } else{
        cart.push({id:id,qty:1});
    }
    saveCart(cart);
    updateCartCount();
 }

 function updateCartCount(){
    const cart = getCart();
    const totalItems = cart.reduce((sum,item) => sum+ item.qty,0);
    const badge = document.getElementById("cart-count");
    if(badge){
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? "flex" :"none";
    }
 }


 function showToast(message){
    const toast = document.createElement("div");
    toast.className="toast";
    toast.textContent =message;
    document.body.appendChild(toast);
    setTimeout(()=> toast.classList.add("show"),10);
    setTimeout(() =>{
        toast.classList.remove("show");
        setTimeout(()=> toast.remove(),300);
    },2000);

 }

 updateCartCount();

 
const cartItemsDiv = document.getElementById("cart-items");
if(cartItemsDiv){
    function renderCart(){
        const cart = getCart();
        cartItemsDiv.innerHTML = "";

        if(cart.length === 0){
            document.getElementById("cart-empty").style.display = "block";
            document.getElementById("cart-total").textContent = "Rs. 0/-";
            return;
        }
        const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
         checkoutBtn.addEventListener("click", () => {
            if (getCart().length === 0) {
            showToast("Your bag is empty!");
            return;
        }
        window.location.href = "checkout.html";
    });
}
        document.getElementById("cart-empty").style.display = "none";

        let total = 0;

        cart.forEach(cartItem => {
            const p = products[cartItem.id];
            if(!p) return;

            const priceNumber = parseInt(p.price.replace(/[^0-9]/g, ""));
            total += priceNumber * cartItem.qty;

            const row = document.createElement("div");
            row.className = "cart-row";
            row.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <div class="cart-row-details">
                    <h4>${p.name}</h4>
                    <p>${p.price}</p>
                    <p>Qty: ${cartItem.qty}</p>
                </div>
                <button class="remove-btn" data-id="${cartItem.id}">Remove</button>
            `;
            cartItemsDiv.appendChild(row);
        });

        document.getElementById("cart-total").textContent = "Rs. " + total.toLocaleString("en-IN") + "/-";

        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                let cart = getCart();
                cart = cart.filter(item => item.id != btn.dataset.id);
                saveCart(cart);
                updateCartCount();
                renderCart();
            });
        });
    }

    renderCart();
}


if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("search-box").value.trim();
    if (query) {
      window.location.href = "search.html?q=" + encodeURIComponent(query);
    }
  });
}

function renderSearchResults() {
  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").toLowerCase();
  const container = document.getElementById("search-results-container");
  const title = document.getElementById("search-title");
  if (!container) return;

  const matches = Object.keys(products).filter(id => {
    const product = products[id];
    return product.name.toLowerCase().includes(query) ||
           product.category.toLowerCase().includes(query);
  });

  title.textContent = matches.length
    ? `Results for "${query}" (${matches.length})`
    : `No results found for "${query}"`;

  container.innerHTML = matches.map(id => {
    const product = products[id];
    return `
      <div class="prod">
        <a href="product.html?id=${id}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <div class="desc">
          <h4>${product.name}</h4>
          <h4>${product.price}/-</h4>
        </div>
        <a href="javascript:void(0)" onclick="addToCart(${id})">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </a>
      </div>
    `;
  }).join("");
}

renderSearchResults();


//---------------------------------LOGIN----

let loggedInUser = null;

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    loggedInUser = { email: email };
    showToast("Logged in!");
    window.location.href = "index.html";
  });
}

const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    loggedInUser = { name: name, email: email };
    showToast("Account created!");
    window.location.href = "index.html";
  });
}


const checkoutSummaryDiv = document.getElementById("checkout-summary");
if (checkoutSummaryDiv) {
    function renderCheckoutSummary() {
        const cart = getCart();
        checkoutSummaryDiv.innerHTML = "";
        let total = 0;

        cart.forEach(cartItem => {
            const p = products[cartItem.id];
            if (!p) return;

            const priceNumber = parseInt(p.price.replace(/[^0-9]/g, ""));
            total += priceNumber * cartItem.qty;

            const row = document.createElement("div");
            row.className = "cart-row";
            row.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <div class="cart-row-details">
                    <h4>${p.name}</h4>
                    <p>${p.price}</p>
                    <p>Qty: ${cartItem.qty}</p>
                </div>
            `;
            checkoutSummaryDiv.appendChild(row);
        });

        document.getElementById("checkout-total").textContent =
            "Rs. " + total.toLocaleString("en-IN") + "/-";

        return total;
    }

    renderCheckoutSummary();
}


const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const cart = getCart();
        if (cart.length === 0) {
            showToast("Your bag is empty!");
            return;
        }

        const name = document.getElementById("checkout-name").value;
        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

        const placeOrderBtn = document.getElementById("place-order-btn");
        placeOrderBtn.textContent = "PROCESSING...";
        placeOrderBtn.disabled = true;

        //  payment delay
        setTimeout(() => {
            const orderId = "VRN" + Math.floor(100000 + Math.random() * 900000);

            document.getElementById("confirm-message").textContent =
                `Thank you, ${name}! Your order #${orderId} has been placed via ${selectedPayment}.`;

            document.getElementById("order-confirmation").style.display = "flex";

            
            saveCart([]);
            updateCartCount();

            placeOrderBtn.textContent = "PLACE ORDER";
            placeOrderBtn.disabled = false;
        }, 1500);
    });
}


const confirmCloseBtn = document.getElementById("confirm-close-btn");
if (confirmCloseBtn) {
    confirmCloseBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}










