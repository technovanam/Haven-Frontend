web: bash -lc 'if [ -d Backend ]; then cd Backend; elif [ -d backend ]; then cd backend; else echo "No backend directory found" && exit 1; fi; npm ci --omit=dev; npm start'
