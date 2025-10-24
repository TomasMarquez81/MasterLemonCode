import React, { useContext } from "react";
import { MemberDetailEntity } from "../details.mv";
import { CompanyContext } from "@/company.context";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
    memberDetailEntity: MemberDetailEntity
}

export const DetailCard: React.FC<Props> = ({ memberDetailEntity }) => {
    const { company } = useContext(CompanyContext);
    
    return (
        <>
            <div className="CardDetailGithub">
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={memberDetailEntity.avatar_url}
                        title={memberDetailEntity.login}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            User Id: {memberDetailEntity.id}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            login: {memberDetailEntity.login}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            name: {memberDetailEntity.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>          
                            company: {company}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            bio: {memberDetailEntity.bio}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};