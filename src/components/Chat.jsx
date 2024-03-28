import { Box } from "@mui/material";
import Button from "./elements/Button";


export const Chat = () => {
    return(
        <Box margin="10px" className="h-screen flex flex-col">
            <Box className="bg-gray-200 flex-1 overflow-y-scroll">
                <Box className="px-4 py-2">
                    <Box className="flex items-center mb-2">
                        <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar" />
                        <Box className="font-medium">John Doe</Box>
                    </Box>
                    <Box className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                        Hi, how can I help you?
                    </Box>
                    <Box className="flex items-center justify-end">
                        <Box className="bg-greene text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                            Sure, I can help with that.
                        </Box>
                        <img className="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar" />
                    </Box>
                </Box>
            </Box>
            <Box className="bg-gray-100 px-4 py-2">
                <Box className="flex items-center">
                    <input className="w-full border rounded-xl py-2 px-4 mr-2" type="text" placeholder="Type your message..." />
                    <Button className="py-2 px-4">
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}