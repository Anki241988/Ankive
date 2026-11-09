import BuisnessOwnerCard from "./BuisnessOwnerCard";
import CustomerCard from "./CustomerCard";

function AudienceSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BuisnessOwnerCard />
        <CustomerCard />
      </div>
    </section>
  );
}

export default AudienceSection;