import type {
  Division,
  Product,
  BlogPost,
  TimelineEvent,
  Certificate,
  NavItem,
  Stat,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelAr: 'الرئيسية', href: '/' },
  { label: 'About Us', labelAr: 'من نحن', href: '/about' },
  { label: 'Our Divisions', labelAr: 'أقسامنا', href: '/divisions' },
  { label: 'Products', labelAr: 'المنتجات', href: '/products' },
  { label: 'Production', labelAr: 'الإنتاج', href: '/production' },
  { label: 'Blog', labelAr: 'المدونة', href: '/blog' },
  { label: 'Contact', labelAr: 'اتصل بنا', href: '/contact' },
];

export const STATS: Stat[] = [
  { value: 20, suffix: '+', label: 'Products', labelAr: 'منتج' },
  { value: 3, suffix: '', label: 'Business Divisions', labelAr: 'أقسام أعمال' },
  { value: 100, suffix: '+', label: 'Business Partners', labelAr: 'شركاء أعمال' },
  { value: 10, suffix: '+', label: 'Countries Served', labelAr: 'دولة' },
];

export const DIVISIONS: Division[] = [
  {
    slug: 'foods',
    name: 'ARKA Foods',
    nameAr: 'أركا للأغذية',
    tagline: 'Premium Food Export',
    taglineAr: 'تصدير الأغذية المتميزة',
    description:
      'ARKA Foods specializes in the export of high-quality fresh, frozen, and processed food products. From farm to port, we ensure every product meets international quality standards.',
    descriptionAr:
      'تتخصص أركا للأغذية في تصدير المنتجات الغذائية الطازجة والمجمدة والمصنعة عالية الجودة. من المزرعة إلى الميناء، نضمن أن كل منتج يلبي معايير الجودة الدولية.',
    features: [
      'Food Export',
      'Fresh Products',
      'Frozen Products',
      'Quality Assurance',
    ],
    featuresAr: [
      'تصدير الأغذية',
      'منتجات طازجة',
      'منتجات مجمدة',
      'ضمان الجودة',
    ],
    image:
      'https://images.unsplash.com/photo-1542838132-25c8eb9396f4?w=1200&q=80',
    icon: 'Wheat',
    color: 'from-green-500 to-blue-500',
  },
  {
    slug: 'trade',
    name: 'ARKA Trade',
    nameAr: 'أركا للتجارة',
    tagline: 'Global Trade & Logistics',
    taglineAr: 'التجارة واللوجستيات العالمية',
    description:
      'ARKA Trade handles import, export, and commercial partnerships across industrial and consumer products. We connect suppliers and buyers worldwide with seamless international logistics.',
    descriptionAr:
      'تتولى أركا للتجارة الاستيراد والتصدير والشراكات التجارية عبر المنتجات الصناعية والاستهلاكية. نربط الموردين والمشترين حول العالم بلوجستيات دولية سلسة.',
    features: [
      'Import & Export',
      'Industrial Products',
      'Commercial Partnerships',
      'International Logistics',
    ],
    featuresAr: [
      'الاستيراد والتصدير',
      'المنتجات الصناعية',
      'الشراكات التجارية',
      'اللوجستيات الدولية',
    ],
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=80',
    icon: 'Ship',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    slug: 'farmer',
    name: 'ARKA Farmer',
    nameAr: 'أركا للمزارع',
    tagline: 'Agricultural Production',
    taglineAr: 'الإنتاج الزراعي',
    description:
      'ARKA Farmer manages the full agricultural cycle — from farming and harvesting to packaging and export. We cultivate quality from the soil up, ensuring export-grade produce.',
    descriptionAr:
      'تدير أركا للمزارع الدورة الزراعية الكاملة — من الزراعة والحصاد إلى التعبئة والتصدير. نزرع الجودة من التربة، ونضمن منتجات بدرجة التصدير.',
    features: [
      'Agricultural Production',
      'Farming & Harvest',
      'Packaging',
      'Export Quality',
    ],
    featuresAr: [
      'الإنتاج الزراعي',
      'الزراعة والحصاد',
      'التعبئة',
      'جودة التصدير',
    ],
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed74794?w=1200&q=80',
    icon: 'Sprout',
    color: 'from-amber-500 to-green-500',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Rice',
    nameAr: 'أرز فاخر',
    slug: 'premium-rice',
    category: 'Grains',
    categoryAr: 'الحبوب',
    description:
      'High-quality Egyptian rice, carefully milled and sorted for export. Long-grain variety with excellent cooking properties and consistent texture.',
    descriptionAr:
      'أرز مصري عالي الجودة، مفلوف ومفرز بعناية للتصدير. صنف طويل الحبة بخصائص طبخ ممتازة وقوام متسق.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865049e31c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586201375761-83865049e31c?w=800&q=80',
      'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=800&q=80',
      'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80',
    ],
    specifications: [
      { label: 'Grain Length', value: '6.5-7.0 mm' },
      { label: 'Moisture', value: 'Max 14%' },
      { label: 'Broken', value: 'Max 5%' },
      { label: 'Purity', value: '99.5%' },
    ],
    packaging: '25kg / 50kg PP bags, 1kg / 5kg consumer packs',
    packagingAr: 'أكياس بولي بروبيلين 25كجم / 50كجم، عبوات استهلاك 1كجم / 5كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Africa', 'Asia'],
    division: 'foods',
  },
  {
    id: '2',
    name: 'Refined Sugar',
    nameAr: 'سكر مكرر',
    slug: 'refined-sugar',
    category: 'Commodities',
    categoryAr: 'السلع',
    description:
      'ICUMSA 45 refined white sugar, premium grade for food and beverage industries. Uniform crystal size with high purity.',
    descriptionAr:
      'سكر أبيض مكرر ICUMSA 45، درجة ممتازة لصناعات الأغذية والمشروبات. حجم بلورات موحد ونقاء عالي.',
    image: 'https://images.unsplash.com/photo-1610724906315-8d4f806c1b1e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610724906315-8d4f806c1b1e?w=800&q=80',
      'https://images.unsplash.com/photo-1582040447138-9e3e1c6e3e3e?w=800&q=80',
    ],
    specifications: [
      { label: 'ICUMSA', value: '45 max' },
      { label: 'Polarization', value: '99.8% min' },
      { label: 'Moisture', value: 'Max 0.05%' },
      { label: 'Color', value: 'Sparkling white' },
    ],
    packaging: '50kg PP bags, 1kg / 2kg consumer packs, bulk containers',
    packagingAr: 'أكياس بولي بروبيلين 50كجم، عبوات استهلاك 1كجم / 2كجم، حاويات سائبة',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Africa', 'Middle East', 'Europe'],
    division: 'trade',
  },
  {
    id: '3',
    name: 'Sea Salt',
    nameAr: 'ملح بحري',
    slug: 'sea-salt',
    category: 'Commodities',
    categoryAr: 'السلع',
    description:
      'Pure Mediterranean sea salt, naturally harvested and sun-dried. Available in coarse, fine, and industrial grades.',
    descriptionAr:
      'ملح بحري متوسطي نقي، يُحصد طبيعياً ويُجفف بالشمس. متوفر بدرجات خشنة وناعمة وصناعية.',
    image: 'https://images.unsplash.com/photo-1518110925495-39d468b3b1b1?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518110925495-39d468b3b1b1?w=800&q=80',
    ],
    specifications: [
      { label: 'NaCl', value: '99.5% min' },
      { label: 'Moisture', value: 'Max 3%' },
      { label: 'Grade', value: 'Coarse / Fine / Industrial' },
      { label: 'Origin', value: 'Mediterranean Sea' },
    ],
    packaging: '25kg / 50kg bags, 500g / 1kg consumer packs',
    packagingAr: 'أكياس 25كجم / 50كجم، عبوات استهلاك 500جم / 1كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'North America'],
    division: 'trade',
  },
  {
    id: '4',
    name: 'Frozen Vegetables Mix',
    nameAr: 'خضروات مجمدة مشكلة',
    slug: 'frozen-vegetables-mix',
    category: 'Frozen',
    categoryAr: 'مجمد',
    description:
      'IQF frozen mixed vegetables — peas, carrots, corn, and green beans. Flash-frozen within hours of harvest to lock in nutrients and flavor.',
    descriptionAr:
      'خضروات مشكلة مجمدة IQF — بازلاء وجزر وذرة وفاصوليا خضراء. تُجمد فوراً خلال ساعات من الحصاد للحفاظ على العناصر الغذائية والنكهة.',
    image: 'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
      'https://images.unsplash.com/photo-1576046775723-3b6e5a4b1b3b?w=800&q=80',
    ],
    specifications: [
      { label: 'Type', value: 'IQF' },
      { label: 'Temperature', value: '-18°C' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Mix', value: 'Peas, Carrots, Corn, Beans' },
    ],
    packaging: '500g / 1kg / 2.5kg poly bags, 10kg cartons',
    packagingAr: 'أكياس بولي 500جم / 1كجم / 2.5كجم، كراتين 10كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Asia'],
    division: 'foods',
  },
  {
    id: '5',
    name: 'Frozen Fruits',
    nameAr: 'فواكه مجمدة',
    slug: 'frozen-fruits',
    category: 'Frozen',
    categoryAr: 'مجمد',
    description:
      'IQF frozen strawberries, mangoes, and berries. Perfect for smoothies, baking, and food manufacturing. Individually quick frozen for maximum convenience.',
    descriptionAr:
      'فراولة ومانجو وتوت مجمد IQF. مثالية للعصائر والخبز وتصنيع الأغذية. تُجمد فردياً وسريعاً لأقصى راحة.',
    image: 'https://images.unsplash.com/photo-1543528176-61b239494933?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543528176-61b239494933?w=800&q=80',
    ],
    specifications: [
      { label: 'Type', value: 'IQF' },
      { label: 'Temperature', value: '-18°C' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Varieties', value: 'Strawberry, Mango, Berry' },
    ],
    packaging: '500g / 1kg poly bags, 10kg cartons',
    packagingAr: 'أكياس بولي 500جم / 1كجم، كراتين 10كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'North America', 'Asia'],
    division: 'foods',
  },
  {
    id: '6',
    name: 'French Fries',
    nameAr: 'بطاطس مقلية',
    slug: 'french-fries',
    category: 'Frozen',
    categoryAr: 'مجمد',
    description:
      'Premium frozen French fries made from Egyptian potatoes. Available in multiple cuts — straight, crinkle, and shoestring. Consistent golden color and crispy texture.',
    descriptionAr:
      'بطاطس مقلية مجمدة ممتازة من البطاطس المصرية. متوفرة بقطعات متعددة — مستقيمة ومموجة ورفيعة. لون ذهبي متسق وقوام مقرمش.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
    ],
    specifications: [
      { label: 'Cut', value: 'Straight / Crinkle / Shoestring' },
      { label: 'Temperature', value: '-18°C' },
      { label: 'Shelf Life', value: '18 months' },
      { label: 'Oil', value: 'Vegetable oil pre-fried' },
    ],
    packaging: '2.5kg / 10kg poly bags, 15kg cartons',
    packagingAr: 'أكياس بولي 2.5كجم / 10كجم، كراتين 15كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Africa'],
    division: 'foods',
  },
  {
    id: '7',
    name: 'Fresh Onions',
    nameAr: 'بصل طازج',
    slug: 'fresh-onions',
    category: 'Fresh',
    categoryAr: 'طازج',
    description:
      'Golden Egyptian onions, naturally cured and sorted by size. Excellent pungency and long storage life. Available in red and golden varieties.',
    descriptionAr:
      'بصل مصري ذهبي، مجفف طبيعياً ومفرز حسب الحجم. نكهة قوية وعمر تخزين طويل. متوفر بأصناف حمراء وذهبية.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba6b5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518977676601-b53f82aba6b5?w=800&q=80',
    ],
    specifications: [
      { label: 'Size', value: '40-80mm' },
      { label: 'Variety', value: 'Golden / Red' },
      { label: 'Moisture', value: 'Properly cured' },
      { label: 'Storage', value: 'Cool, dry place' },
    ],
    packaging: '10kg / 25kg mesh bags, cartons available',
    packagingAr: 'أكياس شبك 10كجم / 25كجم، كراتين متوفرة',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Seasonal (Nov-May)',
    availabilityAr: 'موسمي (نوفمبر-مايو)',
    exportMarkets: ['Europe', 'Middle East', 'Africa', 'Asia'],
    division: 'farmer',
  },
  {
    id: '8',
    name: 'Fresh Garlic',
    nameAr: 'ثوم طازج',
    slug: 'fresh-garlic',
    category: 'Fresh',
    categoryAr: 'طازج',
    description:
      'Premium Egyptian garlic with strong flavor and high allicin content. Carefully harvested, cured, and sorted for export quality.',
    descriptionAr:
      'ثوم مصري ممتاز بنكهة قوية ومحتوى عالٍ من الأليسين. يُحصد ويُجفف ويُفرز بعناية لجودة التصدير.',
    image: 'https://images.unsplash.com/photo-1546470715-d7c1b6f0b8e3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546470715-d7c1b6f0b8e3?w=800&q=80',
    ],
    specifications: [
      { label: 'Size', value: '4-6cm' },
      { label: 'Color', value: 'White / Pink' },
      { label: 'Allicin', value: 'High' },
      { label: 'Storage', value: 'Cool, dry, ventilated' },
    ],
    packaging: '10kg / 20kg mesh bags, cartons available',
    packagingAr: 'أكياس شبك 10كجم / 20كجم، كراتين متوفرة',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Seasonal (Feb-Aug)',
    availabilityAr: 'موسمي (فبراير-أغسطس)',
    exportMarkets: ['Europe', 'Middle East', 'Asia'],
    division: 'farmer',
  },
  {
    id: '9',
    name: 'Fresh Tomatoes',
    nameAr: 'طماطم طازجة',
    slug: 'fresh-tomatoes',
    category: 'Fresh',
    categoryAr: 'طازج',
    description:
      'Vine-ripened Egyptian tomatoes with rich color and flavor. Available in round and Roma varieties. Hand-picked and carefully packed.',
    descriptionAr:
      'طماطم مصرية ناضجة على الكرمة بلون ونكهة غنية. متوفرة بأصناف مستديرة وروما. تُقطف يدوياً وتُعبأ بعناية.',
    image: 'https://images.unsplash.com/photo-1546470715-d7c1b6f0b8e3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80',
    ],
    specifications: [
      { label: 'Variety', value: 'Round / Roma / Cherry' },
      { label: 'Size', value: '60-90mm' },
      { label: 'Color', value: 'Deep red' },
      { label: 'Brix', value: '4.5-6.0' },
    ],
    packaging: '5kg / 10kg cartons, punnets for cherry',
    packagingAr: 'كراتين 5كجم / 10كجم، علب للكرزية',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Africa'],
    division: 'farmer',
  },
  {
    id: '10',
    name: 'Fresh Potatoes',
    nameAr: 'بطاطس طازجة',
    slug: 'fresh-potatoes',
    category: 'Fresh',
    categoryAr: 'طازج',
    description:
      'High-quality Egyptian potatoes, washed and sorted. Ideal for processing, fresh market, and food manufacturing. Excellent frying quality.',
    descriptionAr:
      'بطاطس مصرية عالية الجودة، مغسولة ومفرزة. مثالية للتصنيع والسوق الطازج وصناعة الأغذية. جودة قلي ممتازة.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba6b5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518977676601-b53f82aba6b5?w=800&q=80',
    ],
    specifications: [
      { label: 'Size', value: '40-120mm' },
      { label: 'Variety', value: 'Spunta / Hermes / Cara' },
      { label: 'Dry Matter', value: '18-22%' },
      { label: 'Storage', value: '4-10°C, dark' },
    ],
    packaging: '10kg / 25kg mesh bags, cartons available',
    packagingAr: 'أكياس شبك 10كجم / 25كجم، كراتين متوفرة',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Africa', 'Asia'],
    division: 'farmer',
  },
  {
    id: '11',
    name: 'Green Beans',
    nameAr: 'فاصوليا خضراء',
    slug: 'green-beans',
    category: 'Fresh',
    categoryAr: 'طازج',
    description:
      'Tender green beans, hand-harvested at peak freshness. Available fresh or IQF frozen. Uniform size and vibrant color.',
    descriptionAr:
      'فاصوليا خضراء طرية، تُحصد يدوياً في ذروة الطزاجة. متوفرة طازجة أو مجمدة IQF. حجم موحد ولون نابض.',
    image: 'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    ],
    specifications: [
      { label: 'Length', value: '10-15cm' },
      { label: 'Grade', value: 'Extra / Class I' },
      { label: 'Color', value: 'Bright green' },
      { label: 'Format', value: 'Fresh / IQF' },
    ],
    packaging: '5kg cartons (fresh), 1kg / 10kg (frozen)',
    packagingAr: 'كراتين 5كجم (طازج)، 1كجم / 10كجم (مجمد)',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Oct-May',
    availabilityAr: 'أكتوبر-مايو',
    exportMarkets: ['Europe', 'Middle East'],
    division: 'farmer',
  },
  {
    id: '12',
    name: 'Green Peas',
    nameAr: 'بازلاء خضراء',
    slug: 'green-peas',
    category: 'Frozen',
    categoryAr: 'مجمد',
    description:
      'Sweet green peas, IQF frozen at peak ripeness. Bright color and tender texture. Perfect for retail and food service.',
    descriptionAr:
      'بازلاء خضراء حلوة، مجمدة IQF في ذروة النضج. لون زاهٍ وقوام طري. مثالية للبيع بالتجزئة وخدمات الطعام.',
    image: 'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    ],
    specifications: [
      { label: 'Type', value: 'IQF' },
      { label: 'Size', value: 'Medium / Large' },
      { label: 'Temperature', value: '-18°C' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    packaging: '500g / 1kg poly bags, 10kg cartons',
    packagingAr: 'أكياس بولي 500جم / 1كجم، كراتين 10كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Asia'],
    division: 'foods',
  },
  {
    id: '13',
    name: 'Sweet Corn',
    nameAr: 'ذرة حلوة',
    slug: 'sweet-corn',
    category: 'Frozen',
    categoryAr: 'مجمد',
    description:
      'Sweet yellow corn kernels, IQF frozen. Crisp and juicy with natural sweetness. Available as whole kernel or cob.',
    descriptionAr:
      'حبوب ذرة صفراء حلوة، مجمدة IQF. مقرمشة وعصيرية بحلاوة طبيعية. متوفرة كحبوب كاملة أو كوز.',
    image: 'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    ],
    specifications: [
      { label: 'Type', value: 'IQF kernels / cob' },
      { label: 'Brix', value: '18-22' },
      { label: 'Temperature', value: '-18°C' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    packaging: '500g / 1kg poly bags, 10kg cartons',
    packagingAr: 'أكياس بولي 500جم / 1كجم، كراتين 10كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Africa'],
    division: 'foods',
  },
  {
    id: '14',
    name: 'Extra Virgin Olive Oil',
    nameAr: 'زيت زيتون بكر ممتاز',
    slug: 'extra-virgin-olive-oil',
    category: 'Oils',
    categoryAr: 'الزيوت',
    description:
      'Premium Egyptian extra virgin olive oil, cold-pressed within hours of harvest. Low acidity, rich flavor, and exceptional aroma.',
    descriptionAr:
      'زيت زيتون مصري بكر ممتاز، معصور على البارد خلال ساعات من الحصاد. حموضة منخفضة ونكهة غنية ورائحة استثنائية.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
      'https://images.unsplash.com/photo-1601498929705-4a8c4f8e1b3b?w=800&q=80',
    ],
    specifications: [
      { label: 'Acidity', value: 'Max 0.5%' },
      { label: 'Extraction', value: 'Cold-pressed' },
      { label: 'Grade', value: 'Extra Virgin' },
      { label: 'Peroxide', value: 'Max 20 meq/kg' },
    ],
    packaging: '250ml / 500ml / 1L glass bottles, 5L / 20L tins',
    packagingAr: 'زجاجات 250مل / 500مل / 1لتر، علب 5لتر / 20لتر',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'North America', 'Middle East', 'Asia'],
    division: 'foods',
  },
  {
    id: '15',
    name: 'Sunflower Oil',
    nameAr: 'زيت دوار الشمس',
    slug: 'sunflower-oil',
    category: 'Oils',
    categoryAr: 'الزيوت',
    description:
      'Refined sunflower oil, light and versatile. High smoke point ideal for cooking and frying. Rich in vitamin E.',
    descriptionAr:
      'زيت دوار الشمس المكرر، خفيف ومتعدد الاستخدامات. نقطة دخان عالية مثالية للطبخ والقلي. غني بفيتامين E.',
    image: 'https://images.unsplash.com/photo-1601498929705-4a8c4f8e1b3b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601498929705-4a8c4f8e1b3b?w=800&q=80',
    ],
    specifications: [
      { label: 'Type', value: 'Refined' },
      { label: 'Smoke Point', value: '227°C' },
      { label: 'Vitamin E', value: 'High' },
      { label: 'Trans Fat', value: '0%' },
    ],
    packaging: '1L / 2L / 5L PET bottles, 20L tins',
    packagingAr: 'زجاجات PET 1لتر / 2لتر / 5لتر، علب 20لتر',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Middle East', 'Africa', 'Asia'],
    division: 'trade',
  },
  {
    id: '16',
    name: 'Medjool Dates',
    nameAr: 'تمر المجهول',
    slug: 'medjool-dates',
    category: 'Fresh',
    categoryAr: 'طازج',
    description:
      'Premium Egyptian Medjool dates, large and plump with caramel-like sweetness. Hand-selected and carefully packed for export.',
    descriptionAr:
      'تمر المجهول المصري الممتاز، كبير وممتلئ بحلاوة تشبه الكراميل. مختار يدوياً ومعبأ بعناية للتصدير.',
    image: 'https://images.unsplash.com/photo-1601493702312-1c8c8f3b3b3b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601493702312-1c8c8f3b3b3b?w=800&q=80',
    ],
    specifications: [
      { label: 'Size', value: 'Jumbo / Large / Medium' },
      { label: 'Moisture', value: '20-25%' },
      { label: 'Grade', value: 'Premium / Extra' },
      { label: 'Storage', value: 'Cool, dry place' },
    ],
    packaging: '500g / 1kg / 5kg cartons, bulk 10kg boxes',
    packagingAr: 'كراتين 500جم / 1كجم / 5كجم، علب سائبة 10كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Sep-Mar',
    availabilityAr: 'سبتمبر-مارس',
    exportMarkets: ['Europe', 'Middle East', 'North America', 'Asia'],
    division: 'farmer',
  },
  {
    id: '17',
    name: 'Dried Herbs',
    nameAr: 'أعشاب مجففة',
    slug: 'dried-herbs',
    category: 'Spices & Herbs',
    categoryAr: 'توابل وأعشاب',
    description:
      'Egyptian dried herbs — basil, mint, parsley, and dill. Sun-dried and carefully processed to retain maximum aroma and color.',
    descriptionAr:
      'أعشاب مصرية مجففة — ريحان ونعناع وبقدونس وشبت. مجففة بالشمس ومعالجة بعناية للاحتفاظ بأقصى رائحة ولون.',
    image: 'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    ],
    specifications: [
      { label: 'Varieties', value: 'Basil, Mint, Parsley, Dill' },
      { label: 'Moisture', value: 'Max 8%' },
      { label: 'Format', value: 'Whole / Rubbed / Powder' },
      { label: 'Color', value: 'Natural green' },
    ],
    packaging: '100g / 500g / 1kg bags, bulk 25kg cartons',
    packagingAr: 'أكياس 100جم / 500جم / 1كجم، كراتين سائبة 25كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'North America', 'Middle East'],
    division: 'farmer',
  },
  {
    id: '18',
    name: 'Spices',
    nameAr: 'توابل',
    slug: 'spices',
    category: 'Spices & Herbs',
    categoryAr: 'توابل وأعشاب',
    description:
      'Authentic Egyptian spices — cumin, coriander, fennel, and anise. Carefully ground and packed to preserve essential oils and flavor.',
    descriptionAr:
      'توابل مصرية أصيلة — كمون وكزبرة وشمر وينسون. مطحونة ومعبأة بعناية للحفاظ على الزيوت الأساسية والنكهة.',
    image: 'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170851034-4bf3a3f5e3f3?w=800&q=80',
    ],
    specifications: [
      { label: 'Varieties', value: 'Cumin, Coriander, Fennel, Anise' },
      { label: 'Format', value: 'Whole / Ground' },
      { label: 'Purity', value: '99%+' },
      { label: 'Moisture', value: 'Max 10%' },
    ],
    packaging: '50g / 100g / 500g bags, bulk 25kg sacks',
    packagingAr: 'أكياس 50جم / 100جم / 500جم، أكياس سائبة 25كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Asia', 'North America'],
    division: 'trade',
  },
  {
    id: '19',
    name: 'Red Lentils',
    nameAr: 'عدس أحمر',
    slug: 'red-lentils',
    category: 'Grains',
    categoryAr: 'الحبوب',
    description:
      'Split red lentils, sorted and cleaned for export. Quick-cooking with excellent nutritional profile. High protein and fiber content.',
    descriptionAr:
      'عدس أحمر مقشر، مفرز ونظيف للتصدير. طبخ سريع بقيمة غذائية ممتازة. محتوى عالٍ من البروتين والألياف.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865049e31c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586201375761-83865049e31c?w=800&q=80',
    ],
    specifications: [
      { label: 'Type', value: 'Split / Whole' },
      { label: 'Moisture', value: 'Max 13%' },
      { label: 'Protein', value: '24-26%' },
      { label: 'Purity', value: '99.5%' },
    ],
    packaging: '25kg / 50kg PP bags, 1kg / 5kg consumer packs',
    packagingAr: 'أكياس بولي بروبيلين 25كجم / 50كجم، عبوات استهلاك 1كجم / 5كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Asia', 'Africa'],
    division: 'trade',
  },
  {
    id: '20',
    name: 'Chickpeas',
    nameAr: 'حمص',
    slug: 'chickpeas',
    category: 'Grains',
    categoryAr: 'الحبوب',
    description:
      'Premium Egyptian chickpeas (garbanzo beans), large and uniform. Excellent for cooking, hummus production, and roasting.',
    descriptionAr:
      'حمص مصري ممتاز (حب الحمص)، كبير وموحد. ممتاز للطبخ وإنتاج الحمص والتحميص.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865049e31c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586201375761-83865049e31c?w=800&q=80',
    ],
    specifications: [
      { label: 'Size', value: '8-10mm / 10-12mm' },
      { label: 'Moisture', value: 'Max 13%' },
      { label: 'Protein', value: '19-22%' },
      { label: 'Purity', value: '99.5%' },
    ],
    packaging: '25kg / 50kg PP bags, 1kg / 5kg consumer packs',
    packagingAr: 'أكياس بولي بروبيلين 25كجم / 50كجم، عبوات استهلاك 1كجم / 5كجم',
    origin: 'Egypt',
    originAr: 'مصر',
    availability: 'Year-round',
    availabilityAr: 'طوال العام',
    exportMarkets: ['Europe', 'Middle East', 'Asia', 'North America'],
    division: 'trade',
  },
];

export const PRODUCT_CATEGORIES = [
  'All',
  'Grains',
  'Frozen',
  'Fresh',
  'Oils',
  'Spices & Herbs',
  'Commodities',
];

export const PRODUCT_CATEGORIES_AR = [
  'الكل',
  'الحبوب',
  'مجمد',
  'طازج',
  'الزيوت',
  'توابل وأعشاب',
  'السلع',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'export-tips-for-egyptian-agriculture',
    title: '10 Essential Export Tips for Egyptian Agricultural Products',
    titleAr: '10 نصائح أساسية لتصدير المنتجات الزراعية المصرية',
    excerpt:
      'Learn the key strategies for successfully exporting Egyptian agricultural products to international markets, from quality control to documentation.',
    excerptAr:
      'تعرف على الاستراتيجيات الأساسية لتصدير المنتجات الزراعية المصرية بنجاح إلى الأسواق الدولية، من مراقبة الجودة إلى الوثائق.',
    content:
      'Exporting Egyptian agricultural products requires careful planning and execution. Here are ten essential tips to ensure success in international markets...',
    contentAr:
      'يتطلب تصدير المنتجات الزراعية المصرية تخطيطاً وتنفيذاً دقيقاً. إليك عشر نصائح أساسية لضمان النجاح في الأسواق الدولية...',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80',
    author: 'Ahmed Hassan',
    authorAr: 'أحمد حسن',
    date: '2024-03-15',
    readingTime: 8,
    category: 'Export Tips',
    categoryAr: 'نصائح التصدير',
    tags: ['Export', 'Agriculture', 'Egypt', 'Tips'],
    featured: true,
  },
  {
    slug: 'sustainable-farming-practices',
    title: 'Sustainable Farming: The Future of Egyptian Agriculture',
    titleAr: 'الزراعة المستدامة: مستقبل الزراعة المصرية',
    excerpt:
      'How sustainable farming practices are transforming Egyptian agriculture and creating new opportunities for export-quality produce.',
    excerptAr:
      'كيف تحول ممارسات الزراعة المستدامة الزراعة المصرية وتخلق فرصاً جديدة للمنتجات بجودة التصدير.',
    content:
      'Sustainable farming is no longer just a buzzword — it is becoming the standard for agricultural production worldwide...',
    contentAr:
      'لم تعد الزراعة المستدامة مجرد كلمة رنانة — بل أصبحت المعيار للإنتاج الزراعي في جميع أنحاء العالم...',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed74794?w=1200&q=80',
    author: 'Sarah Ibrahim',
    authorAr: 'سارة إبراهيم',
    date: '2024-03-10',
    readingTime: 6,
    category: 'Agriculture News',
    categoryAr: 'أخبار الزراعة',
    tags: ['Sustainability', 'Farming', 'Agriculture'],
  },
  {
    slug: 'global-food-industry-trends-2024',
    title: 'Global Food Industry Trends Shaping 2024',
    titleAr: 'اتجاهات صناعة الأغذية العالمية التي تشكل عام 2024',
    excerpt:
      'From plant-based foods to sustainable packaging, explore the trends that are reshaping the global food industry this year.',
    excerptAr:
      'من الأغذية النباتية إلى التعبئة المستدامة، استكشف الاتجاهات التي تعيد تشكيل صناعة الأغذية العالمية هذا العام.',
    content:
      'The global food industry is undergoing rapid transformation. Several key trends are emerging that will shape the market in 2024 and beyond...',
    contentAr:
      'تشهد صناعة الأغذية العالمية تحولاً سريعاً. تظهر عدة اتجاهات رئيسية ستشكل السوق في عام 2024 وما بعده...',
    image: 'https://images.unsplash.com/photo-1542838132-25c8eb9396f4?w=1200&q=80',
    author: 'Mohamed Farouk',
    authorAr: 'محمد فاروق',
    date: '2024-03-05',
    readingTime: 7,
    category: 'Food Industry',
    categoryAr: 'صناعة الأغذية',
    tags: ['Food', 'Trends', 'Industry', '2024'],
  },
  {
    slug: 'navigating-international-markets',
    title: 'Navigating International Markets: A Guide for Exporters',
    titleAr: 'التنقل في الأسواق الدولية: دليل للمصدرين',
    excerpt:
      'Understanding market entry strategies, trade agreements, and cultural considerations when expanding into new international markets.',
    excerptAr:
      'فهم استراتيجيات دخول السوق والاتفاقيات التجارية والاعتبارات الثقافية عند التوسع في أسواق دولية جديدة.',
    content:
      'Expanding into international markets is a significant step for any export business. Understanding the nuances of each market is crucial...',
    contentAr:
      'التوسع في الأسواق الدولية خطوة مهمة لأي عمل تجاري تصديري. فهم تفاصيل كل سوق أمر بالغ الأهمية...',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=80',
    author: 'Layla Mostafa',
    authorAr: 'ليلى مصطفى',
    date: '2024-02-28',
    readingTime: 9,
    category: 'International Markets',
    categoryAr: 'الأسواق الدولية',
    tags: ['Markets', 'Export', 'Trade', 'Guide'],
  },
  {
    slug: 'import-regulations-update',
    title: 'Key Import Regulations You Need to Know in 2024',
    titleAr: 'لوائح الاستيراد الرئيسية التي تحتاج لمعرفتها في 2024',
    excerpt:
      'Stay compliant with the latest import regulations across major markets including the EU, US, and Gulf countries.',
    excerptAr:
      'ابقَ متوافقاً مع أحدث لوائح الاستيراد عبر الأسواق الرئيسية بما في ذلك الاتحاد الأوروبي والولايات المتحدة ودول الخليج.',
    content:
      'Import regulations are constantly evolving. Staying up-to-date with the latest requirements is essential for smooth trade operations...',
    contentAr:
      'لوائح الاستيراد تتطور باستمرار. البقاء على اطلاع بأحدث المتطلبات أمر ضروري لعمليات تجارية سلسة...',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=1200&q=80',
    author: 'Karim Abdelrahman',
    authorAr: 'كريم عبد الرحمن',
    date: '2024-02-20',
    readingTime: 5,
    category: 'Import Regulations',
    categoryAr: 'لوائح الاستيراد',
    tags: ['Import', 'Regulations', 'Compliance', '2024'],
  },
  {
    slug: 'shipping-updates-supply-chain',
    title: 'Shipping Updates: Global Supply Chain in 2024',
    titleAr: 'تحديثات الشحن: سلسلة التوريد العالمية في 2024',
    excerpt:
      'The latest developments in global shipping, freight rates, and supply chain logistics affecting import-export businesses.',
    excerptAr:
      'أحدث التطورات في الشحن العالمي وأسعار الشحن ولوجستيات سلسلة التوريد التي تؤثر على أعمال الاستيراد والتصدير.',
    content:
      'The global shipping industry continues to face challenges and opportunities. Understanding current trends helps businesses plan effectively...',
    contentAr:
      'تواجه صناعة الشحن العالمية تحديات وفرصاً مستمرة. فهم الاتجاهات الحالية يساعد الشركات على التخطيط بفعالية...',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&q=80',
    author: 'Omar Saeed',
    authorAr: 'عمر سعيد',
    date: '2024-02-15',
    readingTime: 6,
    category: 'Shipping Updates',
    categoryAr: 'تحديثات الشحن',
    tags: ['Shipping', 'Logistics', 'Supply Chain'],
  },
  {
    slug: 'trade-insights-middle-east',
    title: 'Trade Insights: Middle East Market Opportunities',
    titleAr: 'رؤى تجارية: فرص سوق الشرق الأوسط',
    excerpt:
      'An in-depth analysis of trade opportunities in the Middle East and how Egyptian exporters can capitalize on them.',
    excerptAr:
      'تحليل متعمق للفرص التجارية في الشرق الأوسط وكيف يمكن للمصدرين المصريين الاستفادة منها.',
    content:
      'The Middle East represents a significant market opportunity for Egyptian exporters. With growing populations and increasing food demand...',
    contentAr:
      'يمثل الشرق الأوسط فرصة سوقية كبيرة للمصدرين المصريين. مع تزايد السكان والطلب المتزايد على الأغذية...',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=80',
    author: 'Nour El-Din',
    authorAr: 'نور الدين',
    date: '2024-02-10',
    readingTime: 8,
    category: 'Trade Insights',
    categoryAr: 'رؤى تجارية',
    tags: ['Trade', 'Middle East', 'Market', 'Insights'],
  },
  {
    slug: 'export-regulations-phytosanitary',
    title: 'Understanding Export Regulations and Phytosanitary Certificates',
    titleAr: 'فهم لوائح التصدير والشهادات الصحية النباتية',
    excerpt:
      'A comprehensive guide to export documentation, phytosanitary certificates, and compliance requirements for agricultural products.',
    excerptAr:
      'دليل شامل لوثائق التصدير والشهادات الصحية النباتية ومتطلبات الامتثال للمنتجات الزراعية.',
    content:
      'Proper documentation is the backbone of successful agricultural exports. Phytosanitary certificates ensure products meet the health standards...',
    contentAr:
      'الوثائق المناسبة هي العمود الفقري للتصدير الزراعي الناجح. تضمن الشهادات الصحية النباتية أن المنتجات تلبي معايير الصحة...',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=1200&q=80',
    author: 'Ahmed Hassan',
    authorAr: 'أحمد حسن',
    date: '2024-02-05',
    readingTime: 7,
    category: 'Export Regulations',
    categoryAr: 'لوائح التصدير',
    tags: ['Export', 'Regulations', 'Phytosanitary', 'Documentation'],
  },
];

export const BLOG_CATEGORIES = [
  'All',
  'Export Tips',
  'Agriculture News',
  'Food Industry',
  'International Markets',
  'Import Regulations',
  'Export Regulations',
  'Shipping Updates',
  'Trade Insights',
];

export const BLOG_CATEGORIES_AR = [
  'الكل',
  'نصائح التصدير',
  'أخبار الزراعة',
  'صناعة الأغذية',
  'الأسواق الدولية',
  'لوائح الاستيراد',
  'لوائح التصدير',
  'تحديثات الشحن',
  'رؤى تجارية',
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2015',
    title: 'Foundation',
    titleAr: 'التأسيس',
    description: 'ARKA was founded in Cairo, Egypt, with a vision to connect Egyptian agriculture to the world.',
    descriptionAr: 'تأسست أركا في القاهرة، مصر، برؤية ربط الزراعة المصرية بالعالم.',
  },
  {
    year: '2017',
    title: 'First Export Shipment',
    titleAr: 'أول شحنة تصدير',
    description: 'Successfully completed our first major export shipment to European markets.',
    descriptionAr: 'أكملنا بنجاح أول شحنة تصدير رئيسية إلى الأسواق الأوروبية.',
  },
  {
    year: '2019',
    title: 'ARKA Foods Division',
    titleAr: 'قسم أركا للأغذية',
    description: 'Launched ARKA Foods division, specializing in fresh and frozen food exports.',
    descriptionAr: 'أطلقنا قسم أركا للأغذية، المتخصص في تصدير الأغذية الطازجة والمجمدة.',
  },
  {
    year: '2021',
    title: 'ARKA Trade Division',
    titleAr: 'قسم أركا للتجارة',
    description: 'Expanded with ARKA Trade, handling import, export, and international logistics.',
    descriptionAr: 'توسعنا مع أركا للتجارة، للتعامل مع الاستيراد والتصدير واللوجستيات الدولية.',
  },
  {
    year: '2022',
    title: 'ARKA Farmer Division',
    titleAr: 'قسم أركا للمزارع',
    description: 'Established ARKA Farmer to manage the full agricultural production cycle.',
    descriptionAr: 'أنشأنا أركا للمزارع لإدارة الدورة الزراعية الكاملة.',
  },
  {
    year: '2024',
    title: 'Global Expansion',
    titleAr: 'التوسع العالمي',
    description: 'Now serving 10+ countries with 100+ business partners across three divisions.',
    descriptionAr: 'نخدم الآن أكثر من 10 دول مع أكثر من 100 شريك تجاري عبر ثلاثة أقسام.',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: 'ISO 22000',
    nameAr: 'ISO 22000',
    description: 'Food Safety Management System certification',
    descriptionAr: 'شهادة نظام إدارة سلامة الأغذية',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=400&q=80',
  },
  {
    name: 'HACCP',
    nameAr: 'HACCP',
    description: 'Hazard Analysis Critical Control Point certified',
    descriptionAr: 'شهادة تحليل المخاطر ونقاط التحكم الحرجة',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=400&q=80',
  },
  {
    name: 'Global G.A.P.',
    nameAr: 'Global G.A.P.',
    description: 'Good Agricultural Practices certification',
    descriptionAr: 'شهادة الممارسات الزراعية الجيدة',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=400&q=80',
  },
  {
    name: 'BRC',
    nameAr: 'BRC',
    description: 'British Retail rtium food safety standard',
    descriptionAr: 'معيار سلامة الأغذية للاتحاد البريطاني للتجزئة',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=400&q=80',
  },
  {
    name: 'HALAL',
    nameAr: 'HALAL',
    description: 'Halal certification for food products',
    descriptionAr: 'شهادة الحلال للمنتجات الغذائية',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=400&q=80',
  },
  {
    name: 'FDA Registered',
    nameAr: 'مسجل FDA',
    description: 'US Food and Drug Administration registered',
    descriptionAr: 'مسجل لدى إدارة الغذاء والدواء الأمريكية',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=400&q=80',
  },
];

export const PRODUCTION_STEPS = [
  {
    title: 'Farming',
    titleAr: 'الزراعة',
    description: 'Carefully selected seeds are planted using sustainable agricultural practices across our partner farms.',
    descriptionAr: 'تُزرع بذور مختارة بعناية باستخدام ممارسات زراعية مستدامة عبر مزارعنا الشريكة.',
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed74794?w=800&q=80',
  },
  {
    title: 'Harvesting',
    titleAr: 'الحصاد',
    description: 'Crops are harvested at peak ripeness using modern machinery to ensure quality and minimize waste.',
    descriptionAr: 'تُحصد المحاصيل في ذروة النضج باستخدام آلات حديثة لضمان الجودة وتقليل الهدر.',
    icon: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
  },
  {
    title: 'Processing',
    titleAr: 'المعالجة',
    description: 'Raw produce is cleaned, sorted, and processed in our state-of-the-art facilities.',
    descriptionAr: 'تُنظف وتُفرز وتُعالج المنتجات الخام في مرافقنا المتطورة.',
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba6b5?w=800&q=80',
  },
  {
    title: 'Quality Control',
    titleAr: 'مراقبة الجودة',
    description: 'Every batch undergoes rigorous quality testing in our certified laboratories.',
    descriptionAr: 'تخضع كل دفعة لاختبارات جودة صارمة في مختبراتنا المعتمدة.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=800&q=80',
  },
  {
    title: 'Packaging',
    titleAr: 'التعبئة',
    description: 'Products are packaged in food-grade materials with full traceability and labeling.',
    descriptionAr: 'تُعبأ المنتجات في مواد درجة الغذاء مع تتبع كامل ووضع العلامات.',
    icon: 'Package',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72fac?w=800&q=80',
  },
  {
    title: 'Cold Storage',
    titleAr: 'التخزين البارد',
    description: 'Temperature-controlled storage facilities maintain product freshness and extend shelf life.',
    descriptionAr: 'مرافق تخزين بدرجة حرارة محكومة تحافظ على طزاجة المنتج وتطيل عمر التخزين.',
    icon: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
  },
  {
    title: 'Shipping',
    titleAr: 'الشحن',
    description: 'Efficient logistics network ensures timely delivery to ports worldwide.',
    descriptionAr: 'شبكة لوجستية فعالة تضمن التسليم في الوقت المناسب إلى الموانئ حول العالم.',
    icon: 'Ship',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80',
  },
  {
    title: 'Export',
    titleAr: 'التصدير',
    description: 'Complete export documentation and customs clearance for smooth international trade.',
    descriptionAr: 'وثائق تصدير كاملة وتخليص جمركي للتجارة الدولية السلسة.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80',
  },
];

export const CORE_VALUES = [
  {
    title: 'Quality',
    titleAr: 'الجودة',
    description: 'We never compromise on quality. Every product meets international standards.',
    descriptionAr: 'لا نساوم على الجودة أبداً. كل منتج يلبي المعايير الدولية.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Integrity',
    titleAr: 'النزاهة',
    description: 'Honest and transparent business practices in all our relationships.',
    descriptionAr: 'ممارسات تجارية صادقة وشفافة في جميع علاقاتنا.',
    icon: 'Heart',
  },
  {
    title: 'Innovation',
    titleAr: 'الابتكار',
    description: 'Continuously improving our processes and adopting new technologies.',
    descriptionAr: 'نحسن عملياتنا باستمرار ونتبنى تقنيات جديدة.',
    icon: 'Lightbulb',
  },
  {
    title: 'Sustainability',
    titleAr: 'الاستدامة',
    description: 'Committed to environmentally responsible agricultural and trade practices.',
    descriptionAr: 'ملتزمون بممارسات زراعية وتجارية مسؤولة بيئياً.',
    icon: 'Leaf',
  },
  {
    title: 'Partnership',
    titleAr: 'الشراكة',
    description: 'Building long-term relationships with farmers, suppliers, and clients.',
    descriptionAr: 'بناء علاقات طويلة الأمد مع المزارعين والموردين والعملاء.',
    icon: 'Handshake',
  },
  {
    title: 'Excellence',
    titleAr: 'التميز',
    description: 'Striving for excellence in every aspect of our operations.',
    descriptionAr: 'نسعى للتميز في كل جانب من جوانب عملياتنا.',
    icon: 'Award',
  },
];

export const FAQS = [
  {
    question: 'What products does ARKA export?',
    questionAr: 'ما هي المنتجات التي تصدرها أركا؟',
    answer: 'ARKA exports over 20 products including rice, sugar, frozen vegetables, fresh produce, olive oil, dates, herbs, spices, and more across our three divisions.',
    answerAr: 'تصدر أركا أكثر من 20 منتجاً بما في ذلك الأرز والسكر والخضروات المجمدة والمنتجات الطازجة وزيت الزيتون والتمر والأعشاب والتوابل والمزيد عبر أقسامنا الثلاثة.',
  },
  {
    question: 'Which countries does ARKA serve?',
    questionAr: 'ما هي الدول التي تخدمها أركا؟',
    answer: 'ARKA serves 10+ countries across Europe, the Middle East, Africa, Asia, and North America, with a growing network of business partners.',
    answerAr: 'تخدم أركا أكثر من 10 دول عبر أوروبا والشرق الأوسط وأفريقيا وآسيا وأمريكا الشمالية، مع شبكة متنامية من الشركاء التجاريين.',
  },
  {
    question: 'What certifications does ARKA hold?',
    questionAr: 'ما هي الشهادات التي تحملها أركا؟',
    answer: 'ARKA holds ISO 22000, HACCP, Global G.A.P., BRC, HALAL, and FDA registrations, ensuring our products meet the highest international standards.',
    answerAr: 'تحمل أركا شهادات ISO 22000 وHACCP وGlobal G.A.P. وBRC وHALAL وتسجيلات FDA، مما يضمن أن منتجاتنا تلبي أعلى المعايير الدولية.',
  },
  {
    question: 'How can I become a business partner?',
    questionAr: 'كيف يمكنني أن أصبح شريك تجاري؟',
    answer: 'You can reach out through our contact page or WhatsApp. Our team will respond within 24 hours to discuss partnership opportunities.',
    answerAr: 'يمكنك التواصل عبر صفحة الاتصال أو واتساب. سيرد فريقنا خلال 24 ساعة لمناقشة فرص الشراكة.',
  },
  {
    question: 'What is the minimum order quantity?',
    questionAr: 'ما هو الحد الأدنى لكمية الطلب؟',
    answer: 'Minimum order quantities vary by product. Please contact us with your specific requirements and we will provide detailed information.',
    answerAr: 'تختلف كميات الطلب الأدنى حسب المنتج. يرجى الاتصال بنا بمتطلباتك المحددة وسنقدم معلومات مفصلة.',
  },
  {
    question: 'Does ARKA provide custom packaging?',
    questionAr: 'هل توفر أركا تعبئة مخصصة؟',
    answer: 'Yes, we offer custom packaging solutions including private label options. Contact us to discuss your specific packaging needs.',
    answerAr: 'نعم، نقدم حلول تعبئة مخصصة بما في ذلك خيارات العلامات الخاصة. اتصل بنا لمناقشة احتياجات التعبئة المحددة.',
  },
];

export const COMPANY_INFO = {
  name: 'ARKA',
  fullName: 'ARKA Import & Export',
  fullNameAr: 'أركا للاستيراد والتصدير',
  tagline: 'Connecting Egypt to the World',
  taglineAr: 'نربط مصر بالعالم',
  phone: '+20 2 1234 5678',
  whatsapp: '+20 100 123 4567',
  email: 'info@arka-export.com',
  salesEmail: 'sales@arka-export.com',
  address: 'Nile Tower, 15th Floor, Corniche El Nile, Cairo, Egypt',
  addressAr: 'برج النيل، الطابق 15، كورنيش النيل، القاهرة، مصر',
  workingHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
  workingHoursAr: 'الأحد - الخميس: 9:00 ص - 6:00 م',
  social: {
    linkedin: 'https://linkedin.com/company/arka-export',
    facebook: 'https://facebook.com/arkaexport',
    instagram: 'https://instagram.com/arkaexport',
    twitter: 'https://twitter.com/arkaexport',
  },
};

export const PARTNERS = [
  'Maersk',
  'DHL',
  'CMA CGM',
  'MSC',
  'Hapag-Lloyd',
  'Cosco',
  'Evergreen',
  'Yang Ming',
];
