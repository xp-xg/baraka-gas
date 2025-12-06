export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "lpg-safety-tips-home",
        title: "5 Essential LPG Safety Tips Every Home Should Know",
        excerpt: "Keep your family safe with these critical guidelines for handling, storing, and using LPG cylinders in your home.",
        image: "/images/products/lpg-leak-detector.png",
        date: "December 5, 2025",
        author: "Safety Team",
        category: "Safety",
        readTime: "4 min read",
        content: `
            <h2>Introduction</h2>
            <p>Liquefied Petroleum Gas (LPG) is a clean, efficient, and convenient fuel for cooking. However, like all fuels, it must be handled with care. At Baraka Gas, your safety is our top priority. Here are 5 essential safety tips to ensure a safe kitchen environment.</p>

            <h3>1. Proper Ventilation is Key</h3>
            <p>Always ensure your kitchen is well-ventilated. LPG needs oxygen to burn efficiently. A lack of ventilation can lead to the buildup of Carbon Monoxide (CO), a colorless and odorless gas that can be harmful. Keep windows open while cooking.</p>

            <h3>2. Check for Leaks Regularly</h3>
            <p>Never use a match or lighter to check for leaks. Instead, use the soapy water test. Apply a solution of soap and water to the cylinder valve and hose connections. If you see bubbles forming, there is a leak. Turn off the gas immediately and contact us.</p>

            <h3>3. Store Cylinders Upright</h3>
            <p>LPG cylinders should always be stored in an upright position on a firm, level surface. Never store them in a basement or near a heat source. Keeping them upright ensures the pressure relief valve functions correctly.</p>

            <h3>4. Maintain Your Equipment</h3>
            <p>Inspect your rubber hose regularly for cracks or wear. We recommend replacing the hose every 2 years and the regulator every 5 years. Use only KEBS-certified accessories to guarantee quality and safety.</p>

            <h3>5. Emergency Action Plan</h3>
            <p>If you smell gas (a rotten egg odor):</p>
            <ul>
                <li>Do not switch on/off any electrical appliances.</li>
                <li>Extinguish all open flames.</li>
                <li>Turn off the cylinder regulator.</li>
                <li>Open all doors and windows.</li>
                <li>Evacuate the area and call our emergency line: <strong>+254 721 489 755</strong>.</li>
            </ul>

            <p>By following these simple steps, you can enjoy the benefits of LPG with peace of mind. Stay safe!</p>
        `
    },
    {
        slug: "bulk-lpg-business-benefits",
        title: "Why Bulk LPG is the Smart Choice for Your Business",
        excerpt: "Discover how switching to bulk LPG can reduce operational costs and improve efficiency for hotels, restaurants, and industries.",
        image: "/images/Bulkservices.jpeg",
        date: "December 3, 2025",
        author: "Commercial Team",
        category: "Business",
        readTime: "5 min read",
        content: `
            <h2>Powering Business Efficiency</h2>
            <p>For high-volume energy users like hotels, restaurants, and manufacturing plants, managing multiple gas cylinders can be inefficient and costly. Bulk LPG offers a streamlined solution that boosts productivity and cuts costs.</p>

            <h3>1. Cost Savings</h3>
            <p>Bulk LPG is generally cheaper per kilogram than cylinder gas due to economies of scale. Additionally, you eliminate the administrative costs of frequent cylinder reordering and handling.</p>

            <h3>2. Uninterrupted Supply</h3>
            <p>Running out of gas in the middle of a dinner service or production run is a nightmare. Our bulk storage solutions come with telemetry systems that monitor your tank levels remotely. We schedule refills automatically before you run low, ensuring 100% uptime.</p>

            <h3>3. Space Efficiency</h3>
            <p>A single bulk tank takes up less footprint than a cage full of 50kg cylinders required to store the equivalent amount of energy. This frees up valuable space on your premises for other uses.</p>

            <h3>4. Consistent Pressure</h3>
            <p>Industrial applications often require consistent gas pressure. Bulk tanks, combined with our professional piping and vaporization systems, deliver a steady flow rate that cylinders simply cannot match, improving equipment performance.</p>

            <h3>Conclusion</h3>
            <p>Switching to bulk LPG is an investment in your business's reliability and bottom line. Contact Baraka Gas today for a free site assessment and customized proposal.</p>
        `
    },
    {
        slug: "epra-kebs-gas-installation-standards",
        title: "Understanding EPRA & KEBS Standards for Gas Installation",
        excerpt: "Navigating the regulatory landscape of LPG installation in Kenya. Learn why compliance matters for your safety and insurance.",
        image: "/images/installationandpipping.jpeg",
        date: "November 28, 2025",
        author: "Technical Director",
        category: "Compliance",
        readTime: "6 min read",
        content: `
            <h2>Compliance is Not Optional</h2>
            <p>In Kenya, the Energy and Petroleum Regulatory Authority (EPRA) and the Kenya Bureau of Standards (KEBS) set strict guidelines for LPG installations. Adhering to these is not just about avoiding fines—it's about saving lives.</p>

            <h3>Key Regulatory Requirements</h3>
            <ul>
                <li><strong>Licensed Technicians:</strong> Only EPRA-licensed technicians are authorized to carry out LPG installations. Baraka Gas technicians hold Class A and B licenses.</li>
                <li><strong>Standard Materials:</strong> All pipes, valves, and regulators must meet KS (Kenya Standards) specifications. Using substandard materials is a leading cause of accidents.</li>
                <li><strong>Safety Distances:</strong> Tanks and cylinders must be situated at specific safe distances from buildings, boundaries, and ignition sources.</li>
            </ul>

            <h3>The Importance of Certification</h3>
            <p>After every installation, a completion certificate should be issued. This document is crucial for:</p>
            <ul>
                <li><strong>Insurance Claims:</strong> Insurers may reject fire claims if the gas system was not installed by a certified professional.</li>
                <li><strong>Legal Compliance:</strong> Regular audits by EPRA require proof of compliant installation.</li>
            </ul>

            <p>At Baraka Gas, we handle the entire compliance process for you, from design approval to final commissioning and licensing.</p>
        `
    },
    {
        slug: "baraka-gas-schools-institutions",
        title: "Baraka Gas: Powering Kenya's Schools and Institutions",
        excerpt: "How we are partnering with educational institutions to provide safe, reliable, and affordable cooking energy solutions.",
        image: "/images/installationandpipping2.jpeg",
        date: "November 20, 2025",
        author: "Baraka News",
        category: "Company News",
        readTime: "3 min read",
        content: `
            <h2>Fueling Education</h2>
            <p>Schools and universities face the unique challenge of preparing thousands of meals daily while maintaining strict safety standards and budget controls. Baraka Gas is proud to be the trusted energy partner for leading institutions across Kenya.</p>

            <h3>Why Schools Choose Us</h3>
            <p>We understand that safety is the number one concern for school administrators. That's why our institutional package includes:</p>
            <ul>
                <li><strong>Safety Audits:</strong> Free annual inspections of the entire kitchen gas system.</li>
                <li><strong>Staff Training:</strong> We train kitchen staff on safe handling and emergency procedures.</li>
                <li><strong>Leak Detection Systems:</strong> We install automatic gas detection and shut-off systems in school laboratories and kitchens.</li>
            </ul>

            <h3>Case Study: High School Science Labs</h3>
            <p>We recently completed a comprehensive piping project for a major high school in Nairobi, connecting 4 science laboratories to a central bulk storage unit. The system features individual bench isolation valves and a master emergency shut-off, ensuring students can learn safely.</p>

            <p>Partner with Baraka Gas for a solution that prioritizes safety, reliability, and cost-efficiency.</p>
        `
    }
];
