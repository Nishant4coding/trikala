// src/Tabs.tsx
import { useState } from "react";

interface TabContentProps {
    title: string;
    description: string;
}

const TabContent: React.FC<TabContentProps> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-custom-db mb-4">{description}</p>
    <button className="bg-custom-lb text-white py-2 px-4 rounded">GET FREE QUOTE</button>
  </div>
);

const SwitchingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('interior');

  const renderContent = () => {
    switch (activeTab) {
      case 'interior':
        return (
          <div className="flex justify-center">
            <TabContent title="Royal & Elegant 3 BHK" description="Add texture and magnificent touch." />
            <TabContent title="Contemporary & Classy 4 BHK" description="Classic and crisp geometric designs." />
            <TabContent title="Classic Indian Bedroom" description="Bring in traditional and exemplary serenity." />
          </div>
        );
      case 'exterior':
        return <div className="text-center p-4">Exterior content goes here</div>;
      case 'floorDesign':
        return <div className="text-center p-4">Floor Design content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-custom-bg">
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'interior' ? 'bg-custom-premium' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('interior')}
        >
          Interior
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'exterior' ? 'bg-custom-premium' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('exterior')}
        >
          Exterior
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'floorDesign' ? 'bg-custom-premium' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('floorDesign')}
        >
          Floor Design
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default SwitchingTabs;
