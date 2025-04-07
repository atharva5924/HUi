import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopVault</h2>
          <p className="text-sm">
            Ultimate mobile app for managing, trading, and growing cryptocurrency investments.
          </p>
        </div>

        {/* Primary Pages */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Primary Pages</h3>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Home V1</li>
            <li>Home V2</li>
            <li>Home V3</li>
            <li>Features</li>
            <li>Integrations</li>
            <li>Integration Single</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Secondary Pages */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Secondary Pages</h3>
          <ul className="space-y-2">
            <li>Pricing (without e-com)</li>
            <li>Pricing Single</li>
            <li>Blog V1</li>
            <li>Blog V2</li>
            <li>Blog V3</li>
            <li>Blog Category</li>
            <li>Blog Single</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Utility Pages</h3>
          <ul className="space-y-2">
            <li>Style Guide</li>
            <li>Password Protected</li>
            <li>404 Page</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>More Templates</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
