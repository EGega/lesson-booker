from rest_framework import permissions

class IsTeacherorReadOnly(permissions.IsAdminUser):
      def has_permission(self, request, view):
        # get methods only not a method that can make a change
        if request.method in permissions.SAFE_METHODS:
            return True 
          

        return bool(request.user and request.user.is_staff)