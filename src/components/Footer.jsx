
const Footer = () => {
    return (
    <footer className="bg-[#0f172a] text-gray-300 border border-gray-700 rounded-t-xl">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* About */}
          <div className="lg:col-span-1">
            
            {/* Logo - Tailwind logo nahi */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">NB</span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Nusrat BB
              </h2>
            </div>

            <p className="text-gray-400 max-w-sm leading-7 mb-6">
              Making the world a better place through
              constructing elegant hierarchies.
            </p>

            {/* Contact */}
            <div className="space-y-3">

              <p className="flex items-center gap-3">
                <span className="text-purple-400">☎</span>
                <a
                  href="tel:03332327952"
                  className="hover:text-purple-400 transition"
                >
                  03332327952
                </a>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-purple-400">✉</span>
                <a
                  href="mailto:malaikanisar67@gmail.com"
                  className="hover:text-purple-400 transition break-all"
                >
                  malaikanisar67@gmail.com
                </a>
              </p>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-7">

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold"
                title="Facebook"
              >
                f
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                title="Instagram"
              >
                ◎
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold"
                title="Twitter"
              >
                X
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold"
                title="LinkedIn"
              >
                in
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
                title="YouTube"
              >
                ▶
              </a>

            </div>
          </div>


          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Solutions
            </h3>

            <ul className="space-y-4">
              <li><a href="#" className="hover:text-purple-400 transition">Marketing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Analytics</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Automation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Commerce</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Insights</a></li>
            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Support
            </h3>

            <ul className="space-y-4">
              <li><a href="#" className="hover:text-purple-400 transition">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Guides</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-4">
              <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Jobs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Press</a></li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Legal
            </h3>

            <ul className="space-y-4">
              <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">License</a></li>
            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            © 2026 <span className="text-purple-400">Nusrat BB</span>.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


// export default function Footer() {
//   return (
//     <footer className="bg-[#0b0f19] text-gray-300 py-12 px-6 lg:px-16">
//       {/* Main Grid Container */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
//         {/* Column 1: Brand Info */}
//         <div className="lg:col-span-1 space-y-4">
//           <div className="flex items-center space-x-3">
//             <span className="bg-indigo-600 text-white font-bold px-3 py-1.5 rounded-md">NN</span>
//             <span className="text-white font-semibold text-lg">Nusrat Nisar</span>
//           </div>
//           <p className="text-sm text-gray-400">
//             Making the world a better place through constructing elegant hierarchies.
//           </p>
//           <div className="text-sm text-gray-300 space-y-1">
//             <p>📞 03332327952</p>
//             <p>✉️ malaikanisar67@gmail.com</p>
//           </div>
//         </div>

//         {/* Column 2: Solutions */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Solutions</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><a href="#" className="hover:text-white">Marketing</a></li>
//             <li><a href="#" className="hover:text-white">Analytics</a></li>
//             <li><a href="#" className="hover:text-white">Automation</a></li>
//             <li><a href="#" className="hover:text-white">Commerce</a></li>
//             <li><a href="#" className="hover:text-white">Insights</a></li>
//           </ul>
//         </div>

//         {/* Column 3: Support */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Support</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><a href="#" className="hover:text-white">Submit Ticket</a></li>
//             <li><a href="#" className="hover:text-white">Documentation</a></li>
//             <li><a href="#" className="hover:text-white">Guides</a></li>
//             <li><a href="#" className="hover:text-white">FAQ</a></li>
//           </ul>
//         </div>

//         {/* Column 4: Company */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Company</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><a href="#" className="hover:text-white">About</a></li>
//             <li><a href="#" className="hover:text-white">Blog</a></li>
//             <li><a href="#" className="hover:text-white">Jobs</a></li>
//             <li><a href="#" className="hover:text-white">Press</a></li>
//           </ul>
//         </div>

//         {/* Column 5: Legal (Ab ye baaki columns ke sath line mein aa gaya hai) */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">Legal</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><a href="#" className="hover:text-white">Terms of Service</a></li>
//             <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-white">License</a></li>
//           </ul>
//         </div>
  
//            <div className="flex gap-4 mt-7">

//              {/* Facebook */}
//              <a
//                  href="https://www.facebook.com"
//                  target="_blank"
//                  rel="noopener noreferrer"
//                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold"
//                  title="Facebook"
//                >
//                  f
//                </a>

//                {/* Instagram */}
//                <a
//                  href="https://www.instagram.com"
//                  target="_blank"
//                  rel="noopener noreferrer"
//                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
//                  title="Instagram"
//                >
//                  ◎
//                </a>

//                {/* Twitter / X */}
//                <a
//                  href="https://twitter.com"
//                  target="_blank"
//                  rel="noopener noreferrer"
//                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold"
//                 title="Twitter"
//               >
//                X
//               </a>

//              {/* LinkedIn */}
//              <a
//                href="https://www.linkedin.com"
//                target="_blank"
//                rel="noopener noreferrer"
//                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold"
//                title="LinkedIn"
//              >
//                in
//              </a>

//              {/* YouTube */}
//              <a
//                href="https://www.youtube.com"
//                  target="_blank"
//                rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
//                 title="YouTube"
//               >
//                  ▶
//                </a>

//            </div>
         
     

//       {/* Bottom Copyright Bar */}
//       <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
//         <p>&copy; 2026 Nusrat Nisar. All rights reserved.</p>
//       </div>
//        </div>
//     </footer>
    
//   );
// }