import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const ComplianceTable = ({
  compliances,
}) => {

  const navigate =
    useNavigate();

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        mb: 3,
      }}
    >

      <CardContent>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>
                <strong>ID</strong>
              </TableCell>

              <TableCell>
                <strong>Title</strong>
              </TableCell>

              <TableCell>
                <strong>Department</strong>
              </TableCell>

              <TableCell>
                <strong>Owner</strong>
              </TableCell>

              <TableCell>
                <strong>Due Date</strong>
              </TableCell>

              <TableCell align="center">
                <strong>View</strong>
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {compliances.map(
              (item) => (

                <TableRow
                  key={item.id}
                  hover
                >

                  <TableCell>
                    {item.id}
                  </TableCell>

                  <TableCell>
                    {item.title}
                  </TableCell>

                  <TableCell>
                    {item.department}
                  </TableCell>

                  <TableCell>
                    {item.owner}
                  </TableCell>

                  <TableCell>
                    {item.certificationExpiry}
                  </TableCell>

                  <TableCell align="center">

                    <Button
                      variant="contained"
                      size="small"
                      onClick={() =>
                        navigate(
                          `/compliance/${item.id}`
                        )
                      }
                    >
                      View
                    </Button>

                  </TableCell>

                </TableRow>

              )
            )}

          </TableBody>

        </Table>

      </CardContent>

    </Card>
  );
};

export default ComplianceTable;