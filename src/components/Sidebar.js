export default function Sidebar(){
    const tabs = ['Dashboard','Widget','Reviews','Customers','Online Analysis', 'Settin']
    return (
      <div className="side-bar">
        <div>
          {tabs.map((items)=>{
            return <h3 className="list-items">{items}</h3>;
          })}
        </div>
      </div>
    );
}