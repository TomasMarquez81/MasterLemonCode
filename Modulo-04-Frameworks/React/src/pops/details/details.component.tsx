import React from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "./components/detail.card.component";
import { MemberDetailEntity } from "./details.mv";


export const DetailComponent: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    if (!id) return;

    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setMember(data))
      .catch((error) => {
        console.error("Error fetching user:", error);
        setMember(null);
      });
  }, [id]);

  if (!member) {
    return <p className="text-gray-500 text-center">Loading user details...</p>;
  }

  return <DetailCard memberDetailEntity={member} />;
};